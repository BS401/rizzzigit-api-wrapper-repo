import type { Client, ClientEventEmitter } from '../core/client.js'
import { AuthenticationManager } from './manager/authentication.js'
import { FileManager } from './manager/file.js'
import { NewsManager } from './manager/news.js'
import { NoticeManager } from './manager/notice.js'
import { PictureManager } from './manager/picture.js'

export class MainManager {
  public constructor (client: Client, eventEmitter: ClientEventEmitter) {
    this.#client = client
    this.#news = new NewsManager(this, eventEmitter)
    this.#files = new FileManager(this, eventEmitter)
    this.#pictures = new PictureManager(this, eventEmitter)
    this.#authentication = new AuthenticationManager(this, eventEmitter)
    this.#notices = new NoticeManager(this, eventEmitter)
  }

  #client: Client
  #news: NewsManager
  #files: FileManager
  #pictures: PictureManager
  #authentication: AuthenticationManager
  #notices: NoticeManager

  public get client (): Client { return this.#client }
  public get news (): NewsManager { return this.#news }
  public get files (): FileManager { return this.#files }
  public get pictures (): PictureManager { return this.#pictures }
  public get authentication (): AuthenticationManager { return this.#authentication }
  public get notices (): NoticeManager { return this.#notices }
}
