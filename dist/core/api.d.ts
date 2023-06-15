import type { Client } from './client.js';
export declare class API {
    #private;
    constructor(client: Client);
    request(url: URL, options: {
        body?: string | FileList[0] | Record<string, unknown>;
        method: 'POST' | 'PUT' | 'DELETE' | 'GET';
        query?: Record<string, unknown>;
    }): Promise<Record<string, any>>;
}
