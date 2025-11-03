import { ChangeEvent } from 'react'
import { FaSearch } from 'react-icons/fa'
import './searchBar.scss'

interface SearchBarProps {
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
	return (
		<div className="search">
			<div className="search__inner">
				<FaSearch className="search__icon" />
				<input
					onChange={handleSearch}
					type="search"
					className="search__input"
					id="search"
					placeholder="Rechercher..."
				/>
			</div>
		</div>
	)
}
