import { Document } from '@contentful/rich-text-types'
import type { EntryFieldTypes } from 'contentful'

export type BookItem = {
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
	}
}

export type BookItems = ReadonlyArray<BookItem>

export type BookQueryResult = {
	items: BookItems
}
