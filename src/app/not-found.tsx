import React from 'react'

import './notFound.scss'
import Layout from './_components/Layout'
import Section from './_components/Section'
import ButtonLink from './_components/ButtonLink'

export default function NotFound() {
	return (
		<Layout>
			<div className="not-found">
				<Section>
					<h1 className="not-found__title">
						Erreur 404: Cette page n&apos;existe pas
					</h1>
					<ButtonLink to="/#catalogue" mode="dark-outline">
						Retour vers le catalogue
					</ButtonLink>
				</Section>
			</div>
		</Layout>
	)
}
