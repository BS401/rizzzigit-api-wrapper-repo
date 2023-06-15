import type { Client } from '../core/client.js';
import { AuthenticationManager } from './manager/authentication.js';
import { FileManager } from './manager/file.js';
import { NewsManager } from './manager/news.js';
import { PictureManager } from './manager/picture.js';
export declare class MainManager {
    #private;
    constructor(client: Client);
    get client(): Client;
    get news(): NewsManager;
    get files(): FileManager;
    get pictures(): PictureManager;
    get authentication(): AuthenticationManager;
}
