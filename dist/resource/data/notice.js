var _NoticeResource_data;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { BaseResource } from './base.js';
export class NoticeResource extends BaseResource {
    constructor(manager, id, data) {
        super(manager, id, data);
        _NoticeResource_data.set(this, void 0);
        __classPrivateFieldSet(this, _NoticeResource_data, data, "f");
    }
    get title() { return __classPrivateFieldGet(this, _NoticeResource_data, "f").title; }
}
_NoticeResource_data = new WeakMap();
