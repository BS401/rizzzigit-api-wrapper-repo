var _FileResource_data;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { BaseResource } from './base.js';
export class FileResource extends BaseResource {
    constructor(manager, id, data) {
        super(manager, id, data);
        _FileResource_data.set(this, void 0);
        __classPrivateFieldSet(this, _FileResource_data, data, "f");
    }
    get size() { return __classPrivateFieldGet(this, _FileResource_data, "f").size; }
    get rawUrl() { return new URL(`${this.manager.main.client.options.baseUrl}/f/${this.id}/raw`); }
}
_FileResource_data = new WeakMap();
