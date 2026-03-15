import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.scss'

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
})

const siteUrl = 'https://ruedorion.ca'
const siteDescription =
	'Les Éditions de la rue Dorion figurent dans le panorama éditorial québécois comme une proposition conjuguant littérature, histoire, critique radicale et menées révolutionnaires de tout acabit.'

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Les éditions de la rue Dorion',
		template: '%s | Les éditions de la rue Dorion',
	},
	description: siteDescription,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'fr_CA',
		url: siteUrl,
		siteName: 'Les éditions de la rue Dorion',
		title: 'Les éditions de la rue Dorion',
		description: siteDescription,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Les éditions de la rue Dorion',
		description: siteDescription,
	},
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
