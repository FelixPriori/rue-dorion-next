import { BookItems } from '../_types/types'
import BookCover from './BookCover'
import './bookList.scss'

interface BookListProps {
	books: BookItems
	suggested?: boolean
}

export default function BookList({ books, suggested }: BookListProps) {
	return (
		<ul className={`book-list ${suggested ? 'suggested' : ''}`}>
			{books.map(book => (
				<BookCover {...book.fields} key={book.fields.slug} />
			))}
		</ul>
	)
}
