import { EventEmitter, type EventInterface } from '@rizzzi/eventemitter'
import { MainManager } from '../resource/main.js'
import { API } from './api.js'

export interface ClientOptions {
  baseUrl: string
  storage?: Storage
}

export interface ClientEvents extends EventInterface {
  authChange: []
}

export type ClientEventEmitter = EventEmitter<ClientEvents>

export class Client {
  static get pathArray (): string[] {
    const array: string[] = []
    if (typeof (document) === 'undefined') {
      return array
    }

    for (let entry of document.location.pathname.split('/')) {
      entry = entry.trim().toLowerCase()

      if (entry.length === 0) {
        continue
      }

      array.push(entry)
    }

    return array
  }

  static #instance?: Client
  public static getInstance (): Client {
    return this.#instance ?? (this.#instance = new this())
  }

  public constructor (options?: Partial<ClientOptions>) {
    this.#options = {
      baseUrl: 'https://a7038158-45a1-46f8-96b0-9c55fee5b418-00-332yp18axpa2x.spock.replit.dev',

      ...options
    }

    this.#api = new API(this, this.#options.storage)
    this.#events = new EventEmitter()
    this.#resources = new MainManager(this, this.#events)

    {
      const { on, once, off } = this.#events.bind()

      this.#on = on
      this.#once = once
      this.#off = off
    }
  }

  #options: ClientOptions
  #api: API
  #resources: MainManager
  #events: ClientEventEmitter

  #on: ClientEventEmitter['on']
  #once: ClientEventEmitter['once']
  #off: ClientEventEmitter['off']

  public get options (): ClientOptions { return this.#options }
  public get api (): API { return this.#api }
  public get resources (): MainManager { return this.#resources }

  public get on (): ClientEventEmitter['on'] { return this.#on }
  public get once (): ClientEventEmitter['once'] { return this.#once }
  public get off (): ClientEventEmitter['off'] { return this.#off }
}

if (typeof (window) !== 'undefined') {
  Object.assign(window, { Client })
}
