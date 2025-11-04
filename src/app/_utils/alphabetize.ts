import { AudioTranslation, AudioTranslations } from '../_types/types'

export const alphabetize = (words: AudioTranslations) => {
	const alphabetized: { [key: string]: AudioTranslation[] } = {
		A: [],
		C: [],
		D: [],
		E: [],
		G: [],
		H: [],
		I: [],
		J: [],
		K: [],
		O: [],
		R: [],
		S: [],
		T: [],
		W: [],
	}
	if (words) {
		words.forEach(word => alphabetized[word?.fields.word?.[0]]?.push(word))
	}
	return alphabetized
}
