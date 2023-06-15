var _FileManager_main;
import { __awaiter, __classPrivateFieldSet } from "tslib";
import { FileResource } from '../data/file.js';
import { BaseManager } from './base.js';
export class FileManager extends BaseManager {
    constructor(main) {
        super(main, 'File');
        _FileManager_main.set(this, void 0);
        __classPrivateFieldSet(this, _FileManager_main, main, "f");
    }
    upload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const { main: { client: { api } } } = this;
            const { data: { tokenId } } = yield api.request(this.generateURL(['f']), {
                method: 'PUT'
            });
            const { data: { fileId } } = yield api.request(this.generateURL(['f', 'upload', tokenId]), {
                method: 'POST',
                body: file
            });
            return (yield this.get(fileId));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.main.client.api.request(this.generateURL(['f', id]), { method: 'GET' });
            return new FileResource(this, id, data);
        });
    }
}
_FileManager_main = new WeakMap();
