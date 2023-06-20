import { NoticeResource } from '../data/notice.js';
import { type MainManager } from '../main.js';
import { BaseManager } from './base.js';
export declare class NoticeManager extends BaseManager<NoticeResource, NoticeManager> {
    constructor(main: MainManager);
    list(offset: number, length: number): Promise<NoticeResource[]>;
}
