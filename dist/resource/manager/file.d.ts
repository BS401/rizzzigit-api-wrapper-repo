import { type ClientEventEmitter } from '../../Wrapper.js';
import { FileResource } from '../data/file.js';
import type { MainManager } from '../main.js';
import { BaseManager } from './base.js';
export declare class FileManager extends BaseManager<FileResource, FileManager> {
    #private;
    constructor(main: MainManager, events: ClientEventEmitter);
    upload(file: File | ArrayBuffer): Promise<FileResource>;
    get(id: string): Promise<FileResource | null>;
    delete(file: FileResource): Promise<void>;
}
