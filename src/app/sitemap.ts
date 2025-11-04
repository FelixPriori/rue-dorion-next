import type { MetadataRoute } from 'next'
import { BookQueryResult } from './_types/types'
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.SPACE_ID!,
	accessToken: process.env.ACCESS_TOKEN!,
})

const getAllContentfulBooks = async () => {
	const entries = await client.getEntries({ content_type: 'book' })
	return entries as unknown as BookQueryResult
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const books = await getAllContentfulBooks()
	const sitemap: MetadataRoute.Sitemap = [
		{
			url: `https://ruedorion.ca/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `https://ruedorion.ca/mohawk`,
			lastModified: new Date(),
			priority: 0.5,
		},
		...books.items.map(book => ({
			url: `https://ruedorion.ca/${book.fields.slug}`,
			lastModified: new Date(book.sys.updatedAt),
			priority: 0.5,
		})),
	]
	return sitemap
}
