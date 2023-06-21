import { type ClientEventEmitter } from '../../Wrapper.js'
import { NewsResource } from '../data/news.js'
import type { PictureResource } from '../data/picture.js'
import type { MainManager } from '../main.js'
import { BaseManager } from './base.js'

export class NewsManager extends BaseManager<NewsResource, NewsManager> {
  public constructor (main: MainManager, events: ClientEventEmitter) {
    super(main, events, 'Picture')
  }

  public async list (offset?: number, length?: number): Promise<NewsResource[]> {
    const { main: { client: { api } } } = this

    return (await api.request(this.generateURL(['n'], { offset, length }), { method: 'GET' })).data.map((entry: any) => new NewsResource(this, entry._id, entry))
  }

  public async get (id: string): Promise<NewsResource | null> {
    const cached = this.getCache(id)

    if (cached != null) {
      return cached
    }

    const { main: { client: { options: { baseUrl }, api } } } = this
    const url = new URL(baseUrl)

    url.pathname = `/n/${id}`

    const { data } = await api.request(url, { method: 'GET' })
    return new NewsResource(this, data._id, data)
  }

  public async create (title: string, thumbnail: PictureResource, contents: Array<NewsTextContent | NewsImageContent | NewsLinkContent>): Promise<NewsResource> {
    const { data: { newsId } } = await this.main.client.api.request(this.generateURL(['n']), {
      method: 'PUT',
      body: { title, thumbnail: thumbnail.id, contents }
    })

    return await this.get(newsId) as NewsResource
  }
}

export enum NewsContentType {
  Image, Text, Link
}

export interface NewsContent {
  newsId: string

  contentType: NewsContentType
}

export interface NewsImageContent extends NewsContent {
  contentType: NewsContentType.Image

  pictureId: string
}

export interface NewsTextContent extends NewsContent {
  contentType: NewsContentType.Text

  content: string
}

export interface NewsLinkContent extends NewsContent {
  contentType: NewsContentType.Link

  name: string
  link: string
}

export type NewsContentResolvable = NewsImageContent | NewsTextContent | NewsLinkContent
