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
	scrollTopAnchor,
}: LayoutProps) {
	return (
		<>
			<ScrollTop scrollTopAnchor={scrollTopAnchor} />
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
