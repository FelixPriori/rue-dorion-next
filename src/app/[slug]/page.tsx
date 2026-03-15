import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BookItem, BookQueryResult } from '../_types/types'
import { createClient } from 'contentful'
import { Metadata } from 'next'
import Section from '../_components/Section'
import Layout from '../_components/Layout'

import './page.scss'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import BookDetails from '../_components/BookDetails'
import PressArticle from '../_components/PressArticle'
import BookList from '../_components/BookList'
import { uniqBy } from 'lodash'
import { notFound } from 'next/navigation'

const client = createClient({
	space: process.env.SPACE_ID!,
	accessToken: process.env.ACCESS_TOKEN!,
})

const getContentfulBook = async (slug: string): Promise<BookItem> => {
	const queryOptions = {
		content_type: 'book',
		'fields.slug[match]': slug,
	}

	const queryResult = await client.getEntries(queryOptions)

	return queryResult.items[0] as unknown as BookItem
}

const getAllContentfulBooks = async () => {
	const entries = await client.getEntries({ content_type: 'book' })
	return entries as unknown as BookQueryResult
}

export async function generateStaticParams() {
	const books = await getAllContentfulBooks()
	return books.items.map(book => ({ slug: book.fields.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params

	const { fields } = await getContentfulBook(slug)
	const coverUrl = `https:${fields.cover.fields.file.url}`
	return {
		title: fields.title,
		description: fields.descriptionSeo,
		alternates: {
			canonical: `https://ruedorion.ca/${slug}`,
		},
		openGraph: {
			title: fields.title,
			description: fields.descriptionSeo,
			url: `https://ruedorion.ca/${slug}`,
			type: 'book',
			images: [{ url: coverUrl }],
		},
		twitter: {
			card: 'summary_large_image',
			title: fields.title,
			description: fields.descriptionSeo,
			images: [coverUrl],
		},
	}
}

export default async function BookPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const book = await getContentfulBook(slug)

	if (!book) {
		return notFound()
	}

	const bookFields = book.fields

	const uniqueBooks = uniqBy(bookFields?.book?.filter(b => b.fields?.slug), 'fields.slug').slice(0, 4)

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Book',
		name: bookFields.title,
		author: { '@type': 'Person', name: bookFields.author },
		isbn: bookFields.isbnPaper,
		inLanguage: 'fr',
		publisher: {
			'@type': 'Organization',
			name: 'Les éditions de la rue Dorion',
			url: 'https://ruedorion.ca',
		},
		url: `https://ruedorion.ca/${bookFields.slug}`,
		image: `https:${bookFields.cover.fields.file.url}`,
		...(bookFields.descriptionSeo && { description: bookFields.descriptionSeo }),
	}

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Section className="main" noPaddingTop>
				<Link href="/#catalogue" className="main__back">
					<FaArrowLeft />
					<span>Retour au catalogue</span>
				</Link>
				<div className="main__details">
					<BookDetails {...bookFields} />
				</div>
				<div className="main__presentation">
					<div className="main__title-wrapper">
						<h1 className="main__title">{bookFields.title}</h1>
						<h2 className="main__subtitle">{bookFields.subtitle}</h2>
					</div>
					<div className="main__presentation-content">
						<div className="main__presentation-book">
							{documentToReactComponents(bookFields.presentation)}
						</div>

						{bookFields?.slug === 'la-mohawk-warrior-society' ? (
							<Link href="/mohawk">
								<button type="button" className="cta-book">
									Aller au guide de prononciation
								</button>
							</Link>
						) : (
							!!bookFields?.biography && (
								<div className="section__separator"></div>
							)
						)}
						<div className="main__presentation-author">
							{!!bookFields?.biography &&
								documentToReactComponents(bookFields.biography)}
						</div>
					</div>
				</div>

				{bookFields?.pressArticles && bookFields?.pressArticles.length > 0 && (
					<div className="main__press">
						<>
							<h2 className="main__title ">Recensions et articles de presse</h2>
							<div className="separator"></div>
						</>
						{bookFields?.pressArticles?.map(press => (
							<PressArticle key={press.sys.id} {...press.fields} />
						))}
					</div>
				)}
			</Section>
			{uniqueBooks.length > 0 && (
				<Section
					noPaddingTop
					className="more"
					title="Également dans notre catalogue"
				>
					<BookList suggested books={uniqueBooks} />
				</Section>
			)}
		</Layout>
	)
}
