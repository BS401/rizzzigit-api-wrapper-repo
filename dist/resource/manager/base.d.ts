import type { BaseResource } from '../data/base.js';
import type { MainManager } from '../main.js';
import type { ClientEventEmitter } from '../../Wrapper.js';
export declare abstract class BaseManager<R extends BaseResource<R, M>, M extends BaseManager<R, M>> {
    #private;
    constructor(main: MainManager, events: ClientEventEmitter, name: string);
    getCache(id: string): R | null;
    setCache(id: string, resource: R): R;
    protected generateURL(path: string[], getQuery?: Record<string, unknown>): URL;
    get main(): MainManager;
    get name(): string;
}
