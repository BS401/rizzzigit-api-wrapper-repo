import type { Client } from "../core/client";
import { AuthenticationManager } from "./manager/authentication";
import { FileManager } from "./manager/file";
import { NewsManager } from "./manager/news";
import { PictureManager } from "./manager/picture";

export class MainManager {
  public constructor (client: Client) {
    this.#client = client
    this.#news = new NewsManager(this)
    this.#files = new FileManager(this)
    this.#pictures = new PictureManager(this)
    this.#authentication = new AuthenticationManager(this)
  }

  #client: Client
  #news: NewsManager
  #files: FileManager
  #pictures: PictureManager
  #authentication: AuthenticationManager

  public get client (): Client { return this.#client }
  public get news (): NewsManager { return this.#news }
  public get files (): FileManager { return this.#files }
  public get pictures (): PictureManager { return this.#pictures }
  public get authentication (): AuthenticationManager { return this.#authentication }
}
