import Image from 'next/image'
import Link from 'next/link'
import ButtonLink from './ButtonLink'
import './header.scss'

interface HeaderProps {
	withButtons?: boolean
}

export default function Header({ withButtons }: HeaderProps) {
	return (
		<header className="header">
			<Link href="/">
				<Image
					className="header__image"
					src="/logo-192px.png"
					alt="Logo rue dorion"
					width={512}
					height={512}
				/>
			</Link>
			<h1 className="header__title">Les éditions de la rue Dorion</h1>
			{withButtons && (
				<div className="header__buttons">
					<ButtonLink to="/#a-propos" mode="dark">
						À Propos
					</ButtonLink>
					<ButtonLink to="/#catalogue" mode="dark-outline">
						Catalogue
					</ButtonLink>
				</div>
			)}
		</header>
	)
}
