'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import FloatingInput from './FloatingInput'
import Button from './Button'

export default function MailChimpForm() {
	const [state, setState] = useState({
		value: '',
		error: false,
		success: false,
		emptyFieldError: false,
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		setState(prev => ({
			...prev,
			value: event.target.value,
			error: false,
			success: false,
			emptyFieldError: false,
		}))

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const email = formData.get('email')
		const response = await fetch('/api/mc/subscribeUser', {
			body: JSON.stringify({
				email,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
		const json = await response.json()
		const { error } = json
		if (error) {
			setState(prevState => ({ ...prevState, error: true }))
			return
		}
		setState(prev => ({ ...prev, value: '' }))
	}

	return (
		<form className="footer__form" onSubmit={handleSubmit}>
			<h3 className="footer__subtitle">Infolettre</h3>
			<fieldset className="footer__form-group">
				<FloatingInput
					type="email"
					name="email"
					value={state.value}
					handleChange={handleChange}
					label="Courriel"
				/>
				{state.emptyFieldError && (
					<p role="alert" style={{ color: 'red', marginBottom: '1rem' }}>
						⚠️ Ce champ ne peut pas être vide
					</p>
				)}
				{state.error && (
					<p role="alert" style={{ color: 'red', marginBottom: '1rem' }}>
						⚠️ Une erreur inattendue s&apos;est produite, veuillez réessayer
						plus tard
					</p>
				)}
				{state.success && (
					<p
						className="footer__success"
						style={{ color: 'green', marginBottom: '1rem' }}
					>
						✅ Merci!
					</p>
				)}
				<Button mode="light-outline" type="submit">
					Je m&apos;abonne
				</Button>
			</fieldset>
		</form>
	)
}
