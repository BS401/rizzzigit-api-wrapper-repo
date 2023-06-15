var _MainManager_client, _MainManager_news, _MainManager_files, _MainManager_pictures, _MainManager_authentication;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { AuthenticationManager } from './manager/authentication.js';
import { FileManager } from './manager/file.js';
import { NewsManager } from './manager/news.js';
import { PictureManager } from './manager/picture.js';
export class MainManager {
    constructor(client) {
        _MainManager_client.set(this, void 0);
        _MainManager_news.set(this, void 0);
        _MainManager_files.set(this, void 0);
        _MainManager_pictures.set(this, void 0);
        _MainManager_authentication.set(this, void 0);
        __classPrivateFieldSet(this, _MainManager_client, client, "f");
        __classPrivateFieldSet(this, _MainManager_news, new NewsManager(this), "f");
        __classPrivateFieldSet(this, _MainManager_files, new FileManager(this), "f");
        __classPrivateFieldSet(this, _MainManager_pictures, new PictureManager(this), "f");
        __classPrivateFieldSet(this, _MainManager_authentication, new AuthenticationManager(this), "f");
    }
    get client() { return __classPrivateFieldGet(this, _MainManager_client, "f"); }
    get news() { return __classPrivateFieldGet(this, _MainManager_news, "f"); }
    get files() { return __classPrivateFieldGet(this, _MainManager_files, "f"); }
    get pictures() { return __classPrivateFieldGet(this, _MainManager_pictures, "f"); }
    get authentication() { return __classPrivateFieldGet(this, _MainManager_authentication, "f"); }
}
_MainManager_client = new WeakMap(), _MainManager_news = new WeakMap(), _MainManager_files = new WeakMap(), _MainManager_pictures = new WeakMap(), _MainManager_authentication = new WeakMap();
