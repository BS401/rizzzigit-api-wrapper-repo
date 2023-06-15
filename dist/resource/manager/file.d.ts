import { FileResource } from '../data/file.js';
import type { MainManager } from '../main.js';
import { BaseManager } from './base.js';
export declare class FileManager extends BaseManager<FileResource, FileManager> {
    #private;
    constructor(main: MainManager);
    upload(file: File | ArrayBuffer): Promise<FileResource>;
    get(id: string): Promise<FileResource | null>;
}
