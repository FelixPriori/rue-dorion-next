import Link from 'next/link'
import './buttonLink.scss'
import { ReactNode } from 'react'

interface ButtonLinkProps {
	to: string
	mode: 'dark' | 'dark-outline' | 'light-outline'
	children: ReactNode
	external?: boolean
}

export default function ButtonLink({
	external,
	to,
	mode,
	children,
}: ButtonLinkProps) {
	if (external) {
		return (
			<a
				href={to}
				rel="noreferrer noopener"
				target="_blank"
				className={`dorion-button-link ${mode}`}
			>
				{children}
			</a>
		)
	}

	return (
		<Link href={to} className={`dorion-button-link ${mode}`}>
			{children}
		</Link>
	)
}
