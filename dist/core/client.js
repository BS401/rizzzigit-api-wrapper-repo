var _a, _Client_instance, _Client_options, _Client_api, _Client_resources, _Client_events, _Client_on, _Client_once, _Client_off;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { EventEmitter } from '@rizzzi/eventemitter';
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
        _Client_events.set(this, void 0);
        _Client_on.set(this, void 0);
        _Client_once.set(this, void 0);
        _Client_off.set(this, void 0);
        __classPrivateFieldSet(this, _Client_options, Object.assign({ baseUrl: 'http://localhost:8081/' }, options), "f");
        __classPrivateFieldSet(this, _Client_api, new API(this, __classPrivateFieldGet(this, _Client_options, "f").storage), "f");
        __classPrivateFieldSet(this, _Client_events, new EventEmitter(), "f");
        __classPrivateFieldSet(this, _Client_resources, new MainManager(this, __classPrivateFieldGet(this, _Client_events, "f")), "f");
        {
            const { on, once, off } = __classPrivateFieldGet(this, _Client_events, "f").bind();
            __classPrivateFieldSet(this, _Client_on, on, "f");
            __classPrivateFieldSet(this, _Client_once, once, "f");
            __classPrivateFieldSet(this, _Client_off, off, "f");
        }
    }
    get options() { return __classPrivateFieldGet(this, _Client_options, "f"); }
    get api() { return __classPrivateFieldGet(this, _Client_api, "f"); }
    get resources() { return __classPrivateFieldGet(this, _Client_resources, "f"); }
    get on() { return __classPrivateFieldGet(this, _Client_on, "f"); }
    get once() { return __classPrivateFieldGet(this, _Client_once, "f"); }
    get off() { return __classPrivateFieldGet(this, _Client_off, "f"); }
}
_a = Client, _Client_options = new WeakMap(), _Client_api = new WeakMap(), _Client_resources = new WeakMap(), _Client_events = new WeakMap(), _Client_on = new WeakMap(), _Client_once = new WeakMap(), _Client_off = new WeakMap();
_Client_instance = { value: void 0 };
if (typeof (window) !== 'undefined') {
    Object.assign(window, { Client });
}
