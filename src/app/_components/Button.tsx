import { ButtonHTMLAttributes } from 'react'
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	handleClick?: () => void
	mode: 'dark' | 'dark-outline' | 'light-outline'
}

export default function Button({
	handleClick,
	type,
	children,
	mode,
	...props
}: ButtonProps) {
	return (
		<button
			className={`dorion-button ${mode}`}
			onClick={handleClick}
			type={type}
			{...props}
		>
			{children}
		</button>
	)
}
