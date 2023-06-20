import { type NoticeManager } from '../manager/notice.js';
import { BaseResource } from './base.js';
export declare class NoticeResource extends BaseResource<NoticeResource, NoticeManager> {
    #private;
    constructor(manager: NoticeManager, id: string, data: Record<string, unknown>);
    get title(): string;
}
