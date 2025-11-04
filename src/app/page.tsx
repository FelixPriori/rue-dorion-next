import { createClient } from 'contentful'
import { BookQueryResult } from './_types/types'
import Section from './_components/Section'
import Layout from './_components/Layout'
import SearchSort from './_components/SearchSort'

const client = createClient({
	space: process.env.SPACE_ID!,
	accessToken: process.env.ACCESS_TOKEN!,
})

const getAllContentfulBooks = async () => {
	const entries = await client.getEntries({ content_type: 'book' })
	return entries as unknown as BookQueryResult
}

export default async function Home() {
	const books = await getAllContentfulBooks()

	return (
		<Layout withHero withButtons>
			<Section sectionId="a-propos" className="about" title="À propos">
				<p className="home__paragraph">
					Fondées en 2012, les <strong>Éditions de la rue Dorion</strong>{' '}
					figurent dans le panorama éditorial québécois comme une proposition
					conjuguant littérature, histoire, critique radicale, philosophie et
					menées révolutionnaires de tout acabit. Notre catalogue se développe
					maintenant au rythme de huit à dix parutions par année. L’accent est
					mis sur les théories critiques en sciences sociales, la traduction des
					voix proches ou lointaines, les collaborations transnationales à la
					marge et la parole silenciée par les systèmes d’oppression.
				</p>
			</Section>
			<Section sectionId="catalogue" className="catalog" title="Catalogue" alt>
				<SearchSort books={books.items} />
			</Section>
			<Section sectionId="declaration">
				<p className="home__paragraph">
					Touchant presque au grand fleuve, la petite rue Dorion est située en
					territoire autochtone, lequel n’a jamais été cédé. Nous reconnaissons
					la nation Kanien’kehá:ka comme gardienne des terres et des eaux qui
					nous entourent. Tiohtiá:ke/Montréal est historiquement connu comme un
					lieu de rencontre pour de nombreuses Premières Nations, et aujourd’hui
					d’autres peuples et communautés partagent l’île avec une population
					autochtone diversifiée. Les ouvrages que nous éditons veulent rendre
					compte de ces rencontres et, à partir d’elles, favoriser la
					circulation des savoirs et l’émancipation de tou·tes.
				</p>
			</Section>
		</Layout>
	)
}
