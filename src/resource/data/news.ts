import type { NewsManager } from '../manager/news'
import { BaseResource } from './base'
import type { FileResource } from './file'

export class NewsResource extends BaseResource<NewsResource, NewsManager> {
  public constructor (manager: NewsManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)

    this.#data = data
  }

  #data: Record<string, unknown>

  public get newsContent (): NewsContent[] {
    return this.#data.contents as NewsContent[]
  }

  public get title (): string { return this.#data.title as string }
  public get thumbnailId (): string { return this.#data.thumbnail as string }
  public async getThumbnail (): Promise<FileResource> { return await this.manager.main.files.get(this.thumbnailId) as FileResource }
  public get contents (): NewsContent[] { return this.#data.contents as NewsContent[] }

  public toJSON (): Record<string, any> {
    const { title, thumbnailId, contents } = this

    return { title, thumbnailId, contents }
  }
}

export enum NewsContentType {
  Image, Text, Link
}

export type NewsContent = (
  {
    contentType: NewsContentType.Image
    url: string
  } | {
    contentType: NewsContentType.Text
    content: string
  } | {
    contentType: NewsContentType.Link
    name: string
    link: string
  }
)
