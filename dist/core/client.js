var _a, _Client_instance, _Client_options, _Client_api, _Client_resources;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { MainManager } from '../resource/main.js';
import { API } from './api.js';
export class Client {
    static get pathArray() {
        const array = [];
        if (typeof (document) === 'undefined') {
            return array;
        }
        for (let entry of document.location.pathname.split('/')) {
            entry = entry.trim().toLowerCase();
            if (entry.length === 0) {
                continue;
            }
            array.push(entry);
        }
        return array;
    }
    static getInstance() {
        var _b;
        return (_b = __classPrivateFieldGet(this, _a, "f", _Client_instance)) !== null && _b !== void 0 ? _b : (__classPrivateFieldSet(this, _a, new this(), "f", _Client_instance));
    }
    constructor(options) {
        _Client_options.set(this, void 0);
        _Client_api.set(this, void 0);
        _Client_resources.set(this, void 0);
        __classPrivateFieldSet(this, _Client_options, Object.assign({ baseUrl: 'https://twice-api.cjoma.repl.co/' }, options), "f");
        __classPrivateFieldSet(this, _Client_api, new API(this, __classPrivateFieldGet(this, _Client_options, "f").storage), "f");
        __classPrivateFieldSet(this, _Client_resources, new MainManager(this), "f");
    }
    get options() { return __classPrivateFieldGet(this, _Client_options, "f"); }
    get api() { return __classPrivateFieldGet(this, _Client_api, "f"); }
    get resources() { return __classPrivateFieldGet(this, _Client_resources, "f"); }
}
_a = Client, _Client_options = new WeakMap(), _Client_api = new WeakMap(), _Client_resources = new WeakMap();
_Client_instance = { value: void 0 };
if (typeof (window) !== 'undefined') {
    Object.assign(window, { Client });
}
