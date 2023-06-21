var _BaseManager_main, _BaseManager_name, _BaseManager_cache;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
export class BaseManager {
    constructor(main, events, name) {
        _BaseManager_main.set(this, void 0);
        _BaseManager_name.set(this, void 0);
        _BaseManager_cache.set(this, void 0);
        __classPrivateFieldSet(this, _BaseManager_main, main, "f");
        __classPrivateFieldSet(this, _BaseManager_name, name, "f");
        __classPrivateFieldSet(this, _BaseManager_cache, {}, "f");
    }
    getCache(id) {
        return __classPrivateFieldGet(this, _BaseManager_cache, "f")[id];
    }
    setCache(id, resource) {
        return (__classPrivateFieldGet(this, _BaseManager_cache, "f")[id] = resource);
    }
    generateURL(path, getQuery) {
        const url = new URL(`${__classPrivateFieldGet(this, _BaseManager_main, "f").client.options.baseUrl}`);
        url.pathname = `/${path.join('/')}`;
        if (getQuery != null) {
            for (const key in getQuery) {
                if (getQuery[key] != null) {
                    url.searchParams.set(key, `${getQuery[key]}`);
                }
            }
        }
        return url;
    }
    get main() { return __classPrivateFieldGet(this, _BaseManager_main, "f"); }
    get name() { return __classPrivateFieldGet(this, _BaseManager_name, "f"); }
}
_BaseManager_main = new WeakMap(), _BaseManager_name = new WeakMap(), _BaseManager_cache = new WeakMap();
