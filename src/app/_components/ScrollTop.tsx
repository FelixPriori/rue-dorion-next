'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa'
import './scrollTop.scss'

export default function ScrollTop({
	scrollTopAnchor = '#',
}: {
	scrollTopAnchor?: string
}) {
	const [isVisible, setIsVisible] = useState(false)

	const listenToScroll = useCallback(() => {
		const heightToSetVisible = 400
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop

		if (winScroll > heightToSetVisible && !isVisible) {
			setIsVisible(true)
		} else if (winScroll <= heightToSetVisible && isVisible) {
			setIsVisible(false)
		}
	}, [isVisible])

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll)
		return () => window.removeEventListener('scroll', listenToScroll)
	}, [listenToScroll])

	return (
		isVisible && (
			<Link scroll href={scrollTopAnchor} className="scroll-top">
				<FaArrowUp />
			</Link>
		)
	)
}
