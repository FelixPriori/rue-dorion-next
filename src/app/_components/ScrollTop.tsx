'use client'
import { useState, useEffect, useCallback } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './scrollTop.scss'

export default function ScrollTop() {
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

	const handleScrollTop = useCallback(() => {
		if (window) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}, [])

	return (
		isVisible && (
			<button onClick={handleScrollTop} className="scroll-top">
				<FaArrowUp />
			</button>
		)
	)
}
