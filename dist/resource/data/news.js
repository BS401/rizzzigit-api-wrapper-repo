var _NewsResource_data;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { BaseResource } from './base.js';
export class NewsResource extends BaseResource {
    constructor(manager, id, data) {
        super(manager, id, data);
        _NewsResource_data.set(this, void 0);
        __classPrivateFieldSet(this, _NewsResource_data, data, "f");
    }
    get NewsContentResolvable() {
        return __classPrivateFieldGet(this, _NewsResource_data, "f").contents;
    }
    get title() { return __classPrivateFieldGet(this, _NewsResource_data, "f").title; }
    get thumbnailId() { return __classPrivateFieldGet(this, _NewsResource_data, "f").thumbnail; }
    getThumbnail() {
        return __awaiter(this, void 0, void 0, function* () { return yield this.manager.main.pictures.get(this.thumbnailId); });
    }
    get contents() { return __classPrivateFieldGet(this, _NewsResource_data, "f").contents; }
    toJSON() {
        const { title, thumbnailId, contents } = this;
        return { title, thumbnailId, contents };
    }
}
_NewsResource_data = new WeakMap();
