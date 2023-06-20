import { type NoticeManager } from '../manager/notice.js'
import { BaseResource } from './base.js'

export class NoticeResource extends BaseResource<NoticeResource, NoticeManager> {
  public constructor (manager: NoticeManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)

    this.#data = data
  }

  #data: Record<string, unknown>

  public get title (): string { return this.#data.title as string }
}
