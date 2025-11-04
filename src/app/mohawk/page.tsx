import { createClient } from 'contentful'
import { AudioTranslationsQueryResult } from '../_types/types'
import ScrollTop from '../_components/ScrollTop'
import { Metadata } from 'next'
import './mohawk.scss'
import Link from 'next/link'
import Image from 'next/image'
import { alphabetize } from '../_utils/alphabetize'
import AudioTranslationPlayer from '../_components/AudioTranslationPlayer'

const client = createClient({
	space: process.env.SPACE_ID!,
	accessToken: process.env.ACCESS_TOKEN!,
})

const getAllContentfulAudioTranslations = async () => {
	const entries = await client.getEntries({ content_type: 'audioTranslation' })
	return entries as unknown as AudioTranslationsQueryResult
}

export const metadata: Metadata = {
	title: 'Guide de prononciation',
	description:
		'Glossaire et prononciation des mots en Mohawk | Glossary and pronounciation of mohawk words',
	openGraph: {
		title: 'Guide de prononciation',
		description:
			'Glossaire et prononciation des mots en Mohawk | Glossary and pronounciation of mohawk words',
		images: [
			{
				url: 'https://ruedorion.ca/static/e68198f347c77dee4d10cdbb83753da9/2b6ca/haniehtiio-16x9.webp',
			},
		],
	},
}

export default async function Home() {
	const audioTranslations = await getAllContentfulAudioTranslations()
	const alphabetized = alphabetize(audioTranslations.items)
	return (
		<>
			<ScrollTop />
			<div className="mohawk-page">
				<header className="mohawk-page__header">
					<div className="title__wrapper">
						<h1 className="title">
							<span className="title--fr">
								Glossaire et prononciation des mots en Mohawk
							</span>
							<span className="title--en">
								Glossary and pronounciation of mohawk words
							</span>
						</h1>
					</div>
					<div className="intro">
						<div className="intro__text">
							<p className="intro__text--fr fr">
								Pour le benefice du lectorat, l’actrice Kaniehtiio Horn, qui a
								grandi dans la communauté kanien’kehá:ka de Kahnawà:ke, a
								accepté de donner la prononciation correcte de près d’une
								centaine de mots autochtones se trouvant dans l’ouvrage{' '}
								<i>
									La Mohawk Warrior Society. Manuel de souveraineté autochtone.
								</i>
							</p>

							<p className="intro__text--en en">
								For the benefit of the readership, actress Kaniehtiio Horn, who
								grew up in the Kanien’kehá:ka community of Kahnawà:ke, has
								agreed to give the correct pronunciation of near one hundred
								indigenous words found in the book{' '}
								<span className="not-italics">
									The Mohawk Warrior Society: A Handbook on Sovereignty and
									Survival.
								</span>
							</p>
							<div className="intro__buttons">
								<Link href="/la-mohawk-warrior-society">
									<button type="button" className="cta-book">
										Édition québécoise
									</button>
								</Link>
								<a
									rel="noreferrer"
									target="_blank"
									href="http://www.lyber-eclat.net/livres/la-mohawk-warrior-society/"
								>
									<button type="button" className="cta-book">
										Édition française
									</button>
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									href="https://pmpress.org/index.php?l=product_detail&p=1266"
								>
									<button type="button" className="cta-book">
										English version
									</button>
								</a>
							</div>
						</div>

						<div className="divider--desktop" />

						<div className="intro__image">
							<figure className="intro__figure">
								<Image
									className="intro__image-desktop"
									alt="Kaniehtiio Horn au studio Seratone, Montréal/Tiohtià:ke, 14 juillet 2022."
									src="/haniehtiio-4x3.jpg"
									width={2656}
									height={1992}
								/>
								<Image
									className="intro__image-mobile"
									alt="Kaniehtiio Horn au studio Seratone, Montréal/Tiohtià:ke, 14 juillet 2022."
									src="/haniehtiio-16x9.jpg"
									width={2656}
									height={1494}
								/>
								<figcaption>
									Kaniehtiio Horn au studio Seratone, Montréal/Tiohtià:ke, 14
									juillet 2022. Photo Mathieu Delhorbe.
								</figcaption>
							</figure>
						</div>
					</div>
				</header>

				<div className="divider" />

				<nav className="mohawk-page__nav">
					<a className="nav-item" href="#A">
						A
					</a>
					<a className="nav-item alt" href="#C">
						C
					</a>
					<a className="nav-item" href="#D">
						D
					</a>
					<a className="nav-item alt" href="#E">
						E
					</a>
					<a className="nav-item" href="#G">
						G
					</a>
					<a className="nav-item alt" href="#H">
						H
					</a>
					<a className="nav-item" href="#I">
						I
					</a>
					<a className="nav-item alt" href="#J">
						J
					</a>
					<a className="nav-item" href="#K">
						K
					</a>
					<a className="nav-item alt" href="#O">
						O
					</a>
					<a className="nav-item" href="#R">
						R
					</a>
					<a className="nav-item alt" href="#S">
						S
					</a>
					<a className="nav-item" href="#T">
						T
					</a>
					<a className="nav-item alt" href="#W">
						W
					</a>
				</nav>
				<main className="mohawk-page__main">
					<div id="A">
						{alphabetized['A'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="C">
						{alphabetized['C'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="D">
						{alphabetized['D'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="E">
						{alphabetized['E'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="G">
						{alphabetized['G'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="H">
						{alphabetized['H'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="I">
						{alphabetized['I'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="J">
						{alphabetized['J'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="K">
						{alphabetized['K'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="O">
						{alphabetized['O'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="R">
						{alphabetized['R'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="S">
						{alphabetized['S'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="T">
						{alphabetized['T'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
					<div id="W">
						{alphabetized['W'].map(w => (
							<AudioTranslationPlayer key={w.sys.id} {...w} />
						))}
					</div>
				</main>

				<div className="divider" />

				<footer className="mohawk-page__footer">
					<p className="fr">
						Les Éditions de la rue Dorion tiennent à remercier Kaniehtiio Horn,
						Stasis – groupe d’enquête sur le contemporain, le GRIP-UQAM ainsi
						que la communauté des donatrices et donateurs sur Ulule pour leur
						soutien à la réalisation de cette page.
					</p>
					<p className="en">
						Les Éditions de la rue Dorion would like to thank Kaniehtiio Horn,
						Stasis – groupe d’enquête sur le contemporain, UQAM’s QPIRG as well
						as the community of donors on Ulule for their support in the
						creation of this page.
					</p>
				</footer>
			</div>
		</>
	)
}
