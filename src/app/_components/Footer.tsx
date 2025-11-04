import { FaFacebook, FaInstagram, FaMastodon, FaEnvelope } from 'react-icons/fa'
import { FaBluesky } from 'react-icons/fa6'
import Image from 'next/image'
import MailChimpForm from './MailChimpForm'
import './footer.scss'

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__content">
					<address className="footer__address">
						<h3 className="footer__subtitle">Éditions de la rue Dorion</h3>
						<p className="footer__address-line">1266 rue Dorion</p>
						<p className="footer__address-line">Tiohtià:ke/Montréal</p>
						<p className="footer__address-line">Québec H2K 4A1</p>
						<a
							className="footer__address-line"
							href="mailto:info@ruedorion.ca"
							target="_blank"
							rel="noreferrer"
						>
							info@ruedorion.ca
						</a>
					</address>
					<div className="footer__logo">
						<Image
							className="footer__logo-image"
							src="/logo-white-192px.png"
							alt="Logo"
							loading="lazy"
							width={512}
							height={512}
						/>
					</div>
					<div className="footer__links">
						<a
							className="footer__link"
							href="https://lepressier.com/collections/les-editions-de-la-rue-dorion"
							target="_blank"
							rel="noreferrer"
						>
							Le Pressier
						</a>
						<a
							className="footer__link"
							href="http://www.dimedia.com/"
							target="_blank"
							rel="noreferrer"
						>
							Dimedia
						</a>

						<p>Nos livres sont disponibles dans toutes les bonnes librairies</p>
						<div className="footer__social">
							<a
								href="https://www.facebook.com/editionsdelaruedorion"
								target="_blank"
								rel="noreferrer"
								aria-label="Facebook"
							>
								<FaFacebook />
							</a>
							<a
								href="https://www.instagram.com/editionsdelaruedorion"
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
							<a
								rel="me"
								href="https://jasette.facil.services/@ruedorion"
								target="_blank"
								aria-label="Mastodon"
							>
								<FaMastodon />
							</a>
							<a
								rel="me"
								href="https://bsky.app/profile/ruedorion.ca"
								target="_blank"
								aria-label="Bluesky"
							>
								<FaBluesky />
							</a>
							<a href="mailto:info@ruedorion.ca" aria-label="Email">
								<FaEnvelope />
							</a>
							<a
								rel="me"
								href="https://mastodon.top/@clauderioux"
								aria-hidden={true}
								style={{ display: 'none' }}
							>
								@clauderioux@mastodon.top
							</a>
						</div>
					</div>
					<MailChimpForm />
				</div>
			</footer>
			<div className="copy">
				<p>&copy;rue Dorion; tous droits réservés</p>
			</div>
		</>
	)
}
