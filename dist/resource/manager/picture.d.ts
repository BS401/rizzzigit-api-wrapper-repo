import type { FileResource } from '../data/file.js';
import { PictureResource } from '../data/picture.js';
import type { MainManager } from '../main.js';
import { BaseManager } from './base.js';
export declare class PictureManager extends BaseManager<PictureResource, PictureManager> {
    constructor(main: MainManager);
    list(offset?: number, length?: number): Promise<PictureResource[]>;
    get(id: string): Promise<PictureResource | null>;
    create(file: FileResource): Promise<PictureResource>;
}