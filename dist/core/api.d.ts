import type { Client } from './client.js';
export declare class API {
    #private;
    constructor(client: Client, customLocalStorage?: Storage);
    request(url: URL, options: {
        body?: string | FileList[0] | ArrayBuffer | Record<string, unknown>;
        method: 'POST' | 'PUT' | 'DELETE' | 'GET';
        query?: Record<string, unknown>;
    }): Promise<Record<string, any>>;
}
