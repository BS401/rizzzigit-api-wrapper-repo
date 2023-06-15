import type { NewsManager, NewsContentResolvable } from '../manager/news.js'
import { BaseResource } from './base.js'
import { type PictureResource } from './picture.js'

export class NewsResource extends BaseResource<NewsResource, NewsManager> {
  public constructor (manager: NewsManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)

    this.#data = data
  }

  #data: Record<string, unknown>

  public get NewsContentResolvable (): NewsContentResolvable[] {
    return this.#data.contents as NewsContentResolvable[]
  }

  public get title (): string { return this.#data.title as string }
  public get thumbnailId (): string { return this.#data.thumbnail as string }
  public async getThumbnail (): Promise<PictureResource> { return (await this.manager.main.pictures.get(this.thumbnailId) as PictureResource) }
  public get contents (): NewsContentResolvable[] { return this.#data.contents as NewsContentResolvable[] }

  public toJSON (): Record<string, any> {
    const { title, thumbnailId, contents } = this

    return { title, thumbnailId, contents }
  }
}
