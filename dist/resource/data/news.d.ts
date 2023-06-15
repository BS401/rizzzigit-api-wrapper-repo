import type { NewsManager, NewsContentResolvable } from '../manager/news.js';
import { BaseResource } from './base.js';
import type { FileResource } from './file.js';
export declare class NewsResource extends BaseResource<NewsResource, NewsManager> {
    #private;
    constructor(manager: NewsManager, id: string, data: Record<string, unknown>);
    get NewsContentResolvable(): NewsContentResolvable[];
    get title(): string;
    get thumbnailId(): string;
    getThumbnail(): Promise<FileResource>;
    get contents(): NewsContentResolvable[];
    toJSON(): Record<string, any>;
}