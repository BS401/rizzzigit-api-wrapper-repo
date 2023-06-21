import type { PictureManager } from '../manager/picture.js'
import { BaseResource } from './base.js'
import type { FileResource } from './file.js'

export class PictureResource extends BaseResource<PictureResource, PictureManager> {
  public constructor (manager: PictureManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)

    this.#data = data
  }

  #data: Record<string, unknown>

  public get fileId (): string { return this.#data.fileId as string }

  public async getFile (): Promise<FileResource> { return await this.manager.main.files.get(this.fileId) as FileResource }

  public async delete (): Promise<void> { await this.manager.delete(this) }
}
