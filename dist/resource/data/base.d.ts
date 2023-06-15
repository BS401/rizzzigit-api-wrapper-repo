import type { BaseManager } from '../manager/base.js';
export declare abstract class BaseResource<R extends BaseResource<R, M>, M extends BaseManager<R, M>> {
    #private;
    constructor(manager: M, id: string, data: Record<string, unknown>);
    get manager(): M;
    get id(): string;
    get createTime(): bigint;
    get updateTime(): bigint;
}
