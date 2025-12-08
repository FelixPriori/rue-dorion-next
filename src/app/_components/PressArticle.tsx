'use client'
import { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FaChevronUp } from 'react-icons/fa'
import type { PressArticle as PressArticleType } from '../_types/types'
import './pressArticle.scss'

function PressArticle({ title, content }: PressArticleType['fields']) {
	const [isOpen, setIsOpen] = useState(false)
	const [maxHeight, setMaxHeight] = useState(0)

	const toggle = () => {
		setMaxHeight(isOpen ? 0 : 5000)
		setIsOpen(prev => !prev)
	}

	return (
		<div className="press-article">
			<button onClick={toggle} className="press-article__button" type="button">
				<div className="press-article__icon-container">
					<FaChevronUp
						className={`press-article__icon${isOpen ? '--rotate' : ''}`}
					/>
				</div>
				<h3 className="press-article__title">{title}</h3>
			</button>
			<div className="press-article__content" style={{ maxHeight }}>
				{content && documentToReactComponents(content)}
			</div>
		</div>
	)
}

export default PressArticle
