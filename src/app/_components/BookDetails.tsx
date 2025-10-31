import { BookItem } from '../_types/types'
import Image from 'next/image'
import './bookDetails.scss'
import ButtonLink from './ButtonLink'

function BookDetails({
	cover,
	title,
	author,
	foreword,
	afterword,
	translator,
	pages,
	date,
	dimensions,
	isbnPaper,
	printPrice,
	linkToStore,
	ePrice,
	isbnEBook,
	subtitle,
}: BookItem['fields']) {
	// const isDesktop = useMediaQuery('(min-width: 769px)')

	const formatDate = () =>
		new Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(new Date(date))

	const isPublished = new Date(date) < new Date()

	return (
		<ul className="book-details">
			<li>
				<Image
					className="book-details__cover"
					src={`https:${cover.fields.file.url}`}
					alt={title}
					objectFit="fill"
					width={512}
					height={512}
				/>
			</li>
			{/* {!isDesktop && (
      )} */}
			<div className="main__title-wrapper">
				<h1 className="main__title">{title}</h1>
				<h2 className="main__subtitle">{subtitle}</h2>
			</div>
			<li>
				<h2 className="book-details__author">{author}</h2>
			</li>
			<li>
				<p>{foreword}</p>
			</li>
			<li>
				<p>{afterword}</p>
			</li>
			<li>
				<p>{translator}</p>
			</li>
			<li>
				<p>{pages} pages</p>
			</li>
			<li>
				<p>
					{isPublished ? 'Parution le' : 'À paraitre le'} {formatDate()}
				</p>
			</li>
			<li>
				<p>Format {dimensions}</p>
			</li>
			<li>
				<p>ISBN : {isbnPaper}</p>
			</li>
			{!!printPrice && (
				<li>
					<p>Prix : {printPrice} $</p>
				</li>
			)}
			{(!!isbnEBook || !!ePrice) && (
				<li>
					<p>--- Format e-pub ---</p>
				</li>
			)}
			{!!isbnEBook && (
				<li>
					<p>ISBN : {isbnEBook}</p>
				</li>
			)}
			{!!ePrice && (
				<li>
					<p>Prix : {ePrice} $</p>
				</li>
			)}
			{isPublished && (
				<li>
					<ButtonLink external to={linkToStore} mode="dark-outline">
						Acheter sur le pressier
					</ButtonLink>
				</li>
			)}
		</ul>
	)
}

export default BookDetails
