import { Document } from '@contentful/rich-text-types'
import type { EntryFieldTypes, EntrySys } from 'contentful'

export type AudioTranslation = {
	sys: EntrySys
	fields: {
		word: string
		traduction: Document
		audio: {
			sys: EntrySys
			fields: {
				title: string
				description: Document
				file: EntryFieldTypes.Asset
			}
		}
	}
}

export type AudioTranslations = ReadonlyArray<AudioTranslation>

export type AudioTranslationsQueryResult = {
	items: AudioTranslations
}

export type PressArticle = {
	sys: EntrySys
	fields: {
		title: string
		content: Document
	}
}

export type PressArticles = ReadonlyArray<PressArticle>

export type BookItem = {
	sys: EntrySys
	fields: {
		title: string
		slug: string
		cover: EntryFieldTypes.Asset
		author: string
		translator: string
		subtitle: string
		pages: number
		date: string
		dimensions: string
		isbnPaper: string
		printPrice: number
		linkToStore: string
		foreword: string
		presentation: Document
		biography: Document
		genre: string
		published: boolean
		descriptionSeo: string
		isbnEBook?: string
		ePrice?: number
		afterword?: string
		pressArticles?: PressArticles
		book?: BookItems
	}
}

export type BookItems = BookItem[]

export type BookQueryResult = {
	items: BookItems
}
