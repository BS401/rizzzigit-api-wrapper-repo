import { MainManager } from '../resource/main.js';
import { API } from './api.js';
export interface ClientOptions {
    baseUrl: string;
}
export declare class Client {
    #private;
    static get pathArray(): string[];
    static getInstance(): Client;
    constructor(options?: Partial<ClientOptions>);
    get options(): ClientOptions;
    get api(): API;
    get resources(): MainManager;
}
