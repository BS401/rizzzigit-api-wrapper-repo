import type { FileManager } from '../manager/file.js'
import { BaseResource } from './base.js'

export class FileResource extends BaseResource<FileResource, FileManager> {
  public constructor (manager: FileManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)

    this.#data = data
  }

  #data: Record<string, unknown>

  public get size (): number { return this.#data.size as number }
  public get rawUrl (): URL { return new URL(`${this.manager.main.client.options.baseUrl}/f/${this.id}/raw`) }
}
