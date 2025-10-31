import { BookItem } from '../_types/types'
import Link from 'next/link'
import Image from 'next/image'
import './bookCover.scss'

export default function BookCover({ cover, slug, title }: BookItem['fields']) {
	return (
		<li className="book-cover">
			<Link href={`/${slug}`} aria-label={`Lien vers la page de ${title}`}>
				{cover ? (
					<Image
						src={`https:${cover.fields.file.url}`}
						alt={`Lien vers la page de ${title}`}
						width={512}
						height={512}
					/>
				) : (
					<div className="book-cover__fallback">
						Image de couverture non disponible pour <br /> « {title} »
					</div>
				)}
			</Link>
		</li>
	)
}
