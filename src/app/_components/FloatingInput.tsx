import { ChangeEvent, InputHTMLAttributes } from 'react'
import './floatingInput.scss'

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void
	className?: string
}

export default function FloatingInput({
	type,
	label,
	name,
	placeholder,
	value,
	handleChange,
	className = '',
}: FloatingInputProps) {
	return (
		<div className="floating-input">
			<input
				id={name}
				className={`floating-input__input ${className}`}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			/>
			<label htmlFor={name} className="floating-input__label">
				{label}
			</label>
		</div>
	)
}
