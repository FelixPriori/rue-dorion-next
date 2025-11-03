import { ChangeEvent } from 'react'
import './sortSelect.scss'

interface SortSelectProps {
	value: string
	handleSort: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function SortSelect({ handleSort, value }: SortSelectProps) {
	return (
		<div className="sort-select">
			<label htmlFor="sort-by" className="sort-select__label">
				Trier par :{' '}
			</label>
			<div className="sort-select__inner">
				<select
					className="sort-select__select"
					value={value}
					onChange={handleSort}
					id="sort-by"
				>
					<option className="sort-select__select-option" value="dateAsc">
						Plus récent
					</option>
					<option className="sort-select__select-option" value="dateDesc">
						Moins récent
					</option>
					<option className="sort-select__select-option" value="titleAsc">
						Titre (A - Z)
					</option>
					<option className="sort-select__select-option" value="titleDesc">
						Titre (Z - A)
					</option>
					<option className="sort-select__select-option" value="authorAsc">
						Auteur⸱ice (A - Z)
					</option>
					<option className="sort-select__select-option" value="authorDesc">
						Auteur⸱ice (Z - A)
					</option>
				</select>
			</div>
		</div>
	)
}
