import type { FileManager } from '../manager/file.js';
import { BaseResource } from './base.js';
export declare class FileResource extends BaseResource<FileResource, FileManager> {
    #private;
    constructor(manager: FileManager, id: string, data: Record<string, unknown>);
    get size(): number;
    get rawUrl(): URL;
    delete(): Promise<void>;
}
