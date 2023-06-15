var _AuthenticationManager_instances, _AuthenticationManager_storage, _AuthenticationManager_sessionId_get, _AuthenticationManager_sessionId_set;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { BaseManager } from './base.js';
export class AuthenticationManager extends BaseManager {
    constructor(main) {
        var _a;
        super(main, 'Authentication');
        _AuthenticationManager_instances.add(this);
        _AuthenticationManager_storage.set(this, void 0);
        __classPrivateFieldSet(this, _AuthenticationManager_storage, (_a = main.client.options.storage) !== null && _a !== void 0 ? _a : localStorage, "f");
    }
    isAuthorized() {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = __classPrivateFieldGet(this, _AuthenticationManager_instances, "a", _AuthenticationManager_sessionId_get);
            if (sessionId == null) {
                return false;
            }
            try {
                const response = yield this.main.client.api.request(this.generateURL(['a'], {
                    'session-id': sessionId
                }), {
                    method: 'GET'
                });
                if (response.status !== 200) {
                    __classPrivateFieldSet(this, _AuthenticationManager_instances, null, "a", _AuthenticationManager_sessionId_set);
                    return false;
                }
                return true;
            }
            catch (_a) {
                __classPrivateFieldSet(this, _AuthenticationManager_instances, null, "a", _AuthenticationManager_sessionId_set);
                return false;
            }
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = __classPrivateFieldGet(this, _AuthenticationManager_instances, "a", _AuthenticationManager_sessionId_get);
            if (sessionId == null) {
                return;
            }
            yield this.main.client.api.request(this.generateURL(['a', 'logout'], {
                'session-id': sessionId
            }), {
                method: 'POST'
            });
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _AuthenticationManager_instances, "a", _AuthenticationManager_sessionId_get) != null) {
                try {
                    yield this.logout();
                }
                catch (_a) {
                    //
                }
            }
            const { data: { sessionId } } = yield this.main.client.api.request(this.generateURL(['a']), {
                method: 'POST',
                body: { username, password }
            });
            __classPrivateFieldSet(this, _AuthenticationManager_instances, sessionId, "a", _AuthenticationManager_sessionId_set);
        });
    }
}
_AuthenticationManager_storage = new WeakMap(), _AuthenticationManager_instances = new WeakSet(), _AuthenticationManager_sessionId_get = function _AuthenticationManager_sessionId_get() {
    return __classPrivateFieldGet(this, _AuthenticationManager_storage, "f").getItem('session-id');
}, _AuthenticationManager_sessionId_set = function _AuthenticationManager_sessionId_set(id) {
    if (id == null) {
        __classPrivateFieldGet(this, _AuthenticationManager_storage, "f").removeItem('session-id');
        return;
    }
    __classPrivateFieldGet(this, _AuthenticationManager_storage, "f").setItem('session-id', id);
};
