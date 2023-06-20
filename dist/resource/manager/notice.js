import { __awaiter } from "tslib";
import { NoticeResource } from '../data/notice.js';
import { BaseManager } from './base.js';
export class NoticeManager extends BaseManager {
    constructor(main) {
        super(main, 'Notice');
    }
    list(offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = [];
            const { data } = yield this.main.client.api.request(this.generateURL(['notice'], { offset, length }), {
                method: 'GET'
            });
            for (const entry of data) {
                list.push(new NoticeResource(this, entry._id, entry));
            }
            return list;
        });
    }
}
