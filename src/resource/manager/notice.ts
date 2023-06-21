import { type ClientEventEmitter } from '../../Wrapper.js'
import { NoticeResource } from '../data/notice.js'
import { type MainManager } from '../main.js'
import { BaseManager } from './base.js'

export class NoticeManager extends BaseManager<NoticeResource, NoticeManager> {
  public constructor (main: MainManager, events: ClientEventEmitter) {
    super(main, events, 'Picture')
  }

  public async list (offset: number, length: number): Promise<NoticeResource[]> {
    const list: NoticeResource[] = []

    const { data } = await this.main.client.api.request(this.generateURL(['notice'], { offset, length }), {
      method: 'GET'
    })

    for (const entry of data) {
      list.push(new NoticeResource(this, entry._id, entry))
    }

    return list
  }
}
