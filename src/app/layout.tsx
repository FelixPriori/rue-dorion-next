import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.scss'

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Les éditions de la rue Dorion',
	description:
		'Les Éditions de la rue Dorion figurent dans le panorama éditorial québécois comme une proposition conjuguant littérature, histoire, critique radicale et menées révolutionnaires de tout acabit.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body className={raleway.variable}>
				<main>{children}</main>
			</body>
		</html>
	)
}
