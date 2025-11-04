'use client'
import SearchBar from './SearchBar'
import SortSelect from './SortSelect'
import BookList from './BookList'
import { BookItems } from '../_types/types'
import { ChangeEvent, useCallback, useState } from 'react'
import { sortBooks, SortedBy } from '../_utils/sort'
import './searchSort.scss'

interface SearchSortProps {
	books: BookItems
}

export default function SearchSort({ books }: SearchSortProps) {
	const [sortedBy, setSortedBy] = useState<SortedBy>('dateAsc')
	const [filteredBooks, setFilteredBooks] = useState(() =>
		sortBooks(books, sortedBy),
	)

	const filterBooks = useCallback(
		(query: string) => {
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
		},
		[books, sortedBy],
	)

	const handleSort = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			setSortedBy(event.target.value as SortedBy)
			setFilteredBooks(sortBooks(filteredBooks, event.target.value as SortedBy))
		},
		[filteredBooks],
	)

	const handleSearch = useCallback(
		({ target }: ChangeEvent<HTMLInputElement>) => filterBooks(target.value),
		[filterBooks],
	)

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
