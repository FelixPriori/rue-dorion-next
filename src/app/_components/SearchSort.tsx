'use client'
import SearchBar from './SearchBar'
import SortSelect from './SortSelect'
import BookList from './BookList'
import { BookItems } from '../_types/types'
import { ChangeEvent, useState } from 'react'
import { sortBooks, SortedBy } from '../_utils/sort'
import './searchSort.scss'

interface SearchSortProps {
	books: BookItems
}

export default function SearchSort({ books }: SearchSortProps) {
	const [filteredBooks, setFilteredBooks] = useState(books)
	const [sortedBy, setSortedBy] = useState<SortedBy>('dateAsc')

	const filterBooks = (query: string) => {
		if (query === '') {
			setFilteredBooks(sortBooks(books, sortedBy))
		} else {
			const filtered = books?.filter(
				b =>
					b.fields.author?.toLowerCase().includes(query.toLowerCase()) ||
					b.fields.title?.toLowerCase().includes(query.toLowerCase()) ||
					b.fields.subtitle?.toLowerCase().includes(query.toLowerCase()),
			)
			setFilteredBooks(sortBooks(filtered, sortedBy))
		}
	}

	const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
		setSortedBy(event.target.value as SortedBy)
		setFilteredBooks(sortBooks(filteredBooks, event.target.value as SortedBy))
	}

	const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) =>
		filterBooks(target.value)

	return (
		<>
			<div className="search-sort">
				<SearchBar handleSearch={handleSearch} />
				<SortSelect handleSort={handleSort} value={sortedBy} />
			</div>
			<BookList books={filteredBooks} />
		</>
	)
}
