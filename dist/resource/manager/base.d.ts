import type { BaseResource } from '../data/base.js';
import type { MainManager } from '../main.js';
export declare abstract class BaseManager<R extends BaseResource<R, M>, M extends BaseManager<R, M>> {
    #private;
    constructor(main: MainManager, name: string);
    protected generateURL(path: string[], getQuery?: Record<string, unknown>): URL;
    get main(): MainManager;
    get name(): string;
}
