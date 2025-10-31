import { ReactNode } from 'react'
import Image from 'next/image'
import './hero.scss'

export default function Hero({ children }: { children: ReactNode }) {
	return (
		<div className="hero">
			<div className="hero__image">
				<Image
					src="/hero-image.jpg"
					alt="corniche"
					className="corniche"
					objectPosition="cover"
					loading="eager"
					width={2600}
					height={1600}
				/>
			</div>
			<div className="hero__children">{children}</div>
		</div>
	)
}
