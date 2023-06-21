import { EventEmitter, type EventInterface } from '@rizzzi/eventemitter';
import { MainManager } from '../resource/main.js';
import { API } from './api.js';
export interface ClientOptions {
    baseUrl: string;
    storage?: Storage;
}
export interface ClientEvents extends EventInterface {
    authChange: [];
}
export type ClientEventEmitter = EventEmitter<ClientEvents>;
export declare class Client {
    #private;
    static get pathArray(): string[];
    static getInstance(): Client;
    constructor(options?: Partial<ClientOptions>);
    get options(): ClientOptions;
    get api(): API;
    get resources(): MainManager;
    get on(): ClientEventEmitter['on'];
    get once(): ClientEventEmitter['once'];
    get off(): ClientEventEmitter['off'];
}
