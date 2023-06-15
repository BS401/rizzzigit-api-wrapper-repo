import type { FileResource } from '../data/file.js';
import { NewsResource } from '../data/news.js';
import type { MainManager } from '../main.js';
import { BaseManager } from './base.js';
export declare class NewsManager extends BaseManager<NewsResource, NewsManager> {
    constructor(main: MainManager);
    list(offset?: number, length?: number): Promise<NewsResource[]>;
    get(id: string): Promise<NewsResource | null>;
    create(title: string, thumbnail: FileResource, contents: Array<NewsTextContent | NewsImageContent | NewsLinkContent>): Promise<NewsResource>;
}
export declare enum NewsContentType {
    Image = 0,
    Text = 1,
    Link = 2
}
export interface NewsContent {
    newsId: string;
    contentType: NewsContentType;
}
export interface NewsImageContent extends NewsContent {
    contentType: NewsContentType.Image;
    url: string;
}
export interface NewsTextContent extends NewsContent {
    contentType: NewsContentType.Text;
    content: string;
}
export interface NewsLinkContent extends NewsContent {
    contentType: NewsContentType.Link;
    name: string;
    link: string;
}
export type NewsContentResolvable = NewsImageContent | NewsTextContent | NewsLinkContent;
