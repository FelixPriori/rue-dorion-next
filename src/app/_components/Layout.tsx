import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import ScrollTop from './ScrollTop'

interface LayoutProps {
	children: ReactNode
	scrollTopAnchor?: string
	withHero?: boolean
	withButtons?: boolean
}

export default function Layout({
	withHero,
	withButtons,
	children,
}: LayoutProps) {
	return (
		<>
			<ScrollTop />
			{withHero ? (
				<Hero>
					<Header withButtons={withButtons} />
				</Hero>
			) : (
				<Header />
			)}
			{children}
			<Footer />
		</>
	)
}
