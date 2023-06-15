var _API_client, _API_localStorage;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
export class API {
    constructor(client, customLocalStorage) {
        _API_client.set(this, void 0);
        _API_localStorage.set(this, void 0);
        __classPrivateFieldSet(this, _API_client, client, "f");
        __classPrivateFieldSet(this, _API_localStorage, customLocalStorage !== null && customLocalStorage !== void 0 ? customLocalStorage : localStorage, "f");
    }
    request(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                const { searchParams } = url;
                if (!searchParams.has('session-id')) {
                    const sessionId = __classPrivateFieldGet(this, _API_localStorage, "f").getItem('session-id');
                    if (sessionId != null) {
                        searchParams.set('session-id', sessionId);
                    }
                }
            }
            const { body, method } = options;
            let response;
            if ((typeof (body) === 'string') || (body instanceof File)) {
                response = yield fetch(url, { body, method });
            }
            else if (body != null) {
                const json = JSON.stringify(body);
                response = yield fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': `${json.length}`
                    },
                    body: json
                });
            }
            else {
                response = yield fetch(url, { method });
            }
            const result = yield response.json();
            if (result.status !== 200) {
                throw Object.assign(new Error(`HTTP ${result.status}`), {
                    data: result
                });
            }
            return result;
        });
    }
}
_API_client = new WeakMap(), _API_localStorage = new WeakMap();
