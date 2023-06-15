var _PictureResource_data;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { BaseResource } from './base.js';
export class PictureResource extends BaseResource {
    constructor(manager, id, data) {
        super(manager, id, data);
        _PictureResource_data.set(this, void 0);
        __classPrivateFieldSet(this, _PictureResource_data, data, "f");
    }
    get fileId() { return __classPrivateFieldGet(this, _PictureResource_data, "f").fileId; }
    getFile() {
        return __awaiter(this, void 0, void 0, function* () { return yield this.manager.main.files.get(this.fileId); });
    }
}
_PictureResource_data = new WeakMap();
