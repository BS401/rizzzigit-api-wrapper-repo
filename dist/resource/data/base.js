var _BaseResource_manager, _BaseResource_id, _BaseResource_data;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
export class BaseResource {
    constructor(manager, id, data) {
        _BaseResource_manager.set(this, void 0);
        _BaseResource_id.set(this, void 0);
        _BaseResource_data.set(this, void 0);
        __classPrivateFieldSet(this, _BaseResource_manager, manager, "f");
        __classPrivateFieldSet(this, _BaseResource_id, id, "f");
        __classPrivateFieldSet(this, _BaseResource_data, data, "f");
    }
    get manager() { return __classPrivateFieldGet(this, _BaseResource_manager, "f"); }
    get id() { return __classPrivateFieldGet(this, _BaseResource_id, "f"); }
    get createTime() { return __classPrivateFieldGet(this, _BaseResource_data, "f").createTime; }
    get updateTime() { return __classPrivateFieldGet(this, _BaseResource_data, "f").updateTime; }
}
_BaseResource_manager = new WeakMap(), _BaseResource_id = new WeakMap(), _BaseResource_data = new WeakMap();
