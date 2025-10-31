import { ReactNode } from 'react'
import './section.scss'

interface SectionProps {
	children: ReactNode
	className?: string
	title?: string
	alt?: boolean
	noPaddingTop?: boolean
	sectionId?: string
}

export default function Section({
	title,
	alt,
	sectionId,
	children,
	className,
	noPaddingTop,
}: SectionProps) {
	return (
		<section
			id={sectionId}
			className={`section ${alt ? 'alt' : ''} ${
				noPaddingTop ? 'no-padding-top' : ''
			} ${className}`}
		>
			{title && (
				<div>
					<h2 className="section__title">{title}</h2>
					<div className="section__separator"></div>
				</div>
			)}
			{children}
		</section>
	)
}
