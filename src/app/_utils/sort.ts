import { BookItem, BookItems } from '../_types/types'

export type SortedBy =
	| 'dateDesc'
	| 'dateAsc'
	| 'titleAsc'
	| 'titleDesc'
	| 'authorAsc'
	| 'authorDesc'

export const sortBooks = (books: BookItems, sortedBy: SortedBy) => {
	const clonedBooks = structuredClone(books)
	switch (sortedBy) {
		case 'dateDesc': {
			return clonedBooks.sort((a: BookItem, b: BookItem) => {
				if (a.fields.date < b.fields.date) {
					return -1
				}
				if (a.fields.date > b.fields.date) {
					return 1
				}
				return 0
			})
		}
		case 'dateAsc': {
			return clonedBooks.sort((a: BookItem, b: BookItem) => {
				if (a.fields.date > b.fields.date) {
					return -1
				}
				if (a.fields.date < b.fields.date) {
					return 1
				}
				return 0
			})
		}
		case 'titleAsc': {
			return clonedBooks.sort((a: BookItem, b: BookItem) =>
				a.fields.title.localeCompare(b.fields.title),
			)
		}
		case 'titleDesc': {
			return clonedBooks.sort((a: BookItem, b: BookItem) =>
				b.fields.title.localeCompare(a.fields.title),
			)
		}
		case 'authorAsc': {
			return clonedBooks.sort((a: BookItem, b: BookItem) =>
				a.fields.author.localeCompare(b.fields.author),
			)
		}
		case 'authorDesc': {
			return clonedBooks.sort((a: BookItem, b: BookItem) =>
				b.fields.author.localeCompare(a.fields.author),
			)
		}
		default: {
			return clonedBooks
		}
	}
}
