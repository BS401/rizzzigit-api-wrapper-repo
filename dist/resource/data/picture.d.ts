import type { PictureManager } from '../manager/picture.js';
import { BaseResource } from './base.js';
import type { FileResource } from './file.js';
export declare class PictureResource extends BaseResource<PictureResource, PictureManager> {
    #private;
    constructor(manager: PictureManager, id: string, data: Record<string, unknown>);
    get fileId(): string;
    getFile(): Promise<FileResource>;
}
