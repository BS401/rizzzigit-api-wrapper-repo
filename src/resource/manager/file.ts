import { type ClientEventEmitter } from '../../Wrapper.js'
import { FileResource } from '../data/file.js'
import type { MainManager } from '../main.js'
import { BaseManager } from './base.js'

export class FileManager extends BaseManager<FileResource, FileManager> {
  public constructor (main: MainManager, events: ClientEventEmitter) {
    super(main, events, 'Picture')

    this.#main = main
  }

  #main: MainManager

  public async upload (file: File | ArrayBuffer): Promise<FileResource> {
    const { main: { client: { api } } } = this

    const { data: { tokenId } } = await api.request(this.generateURL(['f']), {
      method: 'PUT'
    })

    const { data: { fileId } } = await api.request(this.generateURL(['f', 'upload', tokenId]), {
      method: 'POST',
      body: file
    })

    return (await this.get(fileId)) as FileResource
  }

  public async get (id: string): Promise<FileResource | null> {
    const cached = this.getCache(id)

    if (cached != null) {
      return cached
    }

    const data = await this.main.client.api.request(this.generateURL(['f', id]), { method: 'GET' })

    return this.setCache(id, new FileResource(this, id, data))
  }

  public async delete (file: FileResource): Promise<void> {
    await this.main.client.api.request(this.generateURL(['f', file.id]), {
      method: 'DELETE'
    })
  }
}
