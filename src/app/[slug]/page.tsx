import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BookItem } from '../_types/types'
import { createClient } from 'contentful'
import { Metadata } from 'next'
import Section from '../_components/Section'
import Layout from '../_components/Layout'

import './page.scss'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import BookDetails from '../_components/BookDetails'

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

export async function generateMetadata(
	params: Promise<{ slug: string }>,
): Promise<Metadata> {
	const { slug } = await params

	const { fields } = await getContentfulBook(slug)

	return {
		title: fields.title,
		description: fields.descriptionSeo,
		openGraph: {
			title: fields.title,
			description: fields.descriptionSeo,
			images: [
				{
					url: new URL(`https:${fields.cover.fields.file.url}`),
				},
			],
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
	const bookFields = book.fields

	return (
		<Layout>
			<Section className="main" noPaddingTop>
				<Link href="/#catalogue" className="main__back">
					<FaArrowLeft />
					<span>Retour au catalogue</span>
				</Link>
				<div className="main__details">
					<BookDetails {...bookFields} />
				</div>
				<div className="main__presentation">
					{/* {isDesktop && (
            <div className="main__title-wrapper">
              <h1 className="main__title">{contentfulBook?.title}</h1>
              <h2 className="main__subtitle">{contentfulBook?.subtitle}</h2>
            </div>
          )} */}
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

				{/* {contentfulBook?.pressArticles?.length > 0 && (
          <div className="main__press">
            <>
              <h2 className="main__title ">Recensions et articles de presse</h2>
              <div className="separator"></div>
            </>
            {contentfulBook?.pressArticles?.map((press) => (
              <PressArticle key={press.id} {...press} />
            ))}
          </div>
        )} */}
			</Section>
		</Layout>
	)
}
