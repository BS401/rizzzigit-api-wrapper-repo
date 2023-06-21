import { __awaiter } from "tslib";
import { PictureResource } from '../data/picture.js';
import { BaseManager } from './base.js';
export class PictureManager extends BaseManager {
    constructor(main, events) {
        super(main, events, 'Picture');
    }
    list(offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.main.client.api.request(this.generateURL(['p'], {
                offset, length
            }), {
                method: 'GET'
            });
            const pictures = [];
            for (const entry of data) {
                pictures.push(new PictureResource(this, entry._id, entry));
            }
            return pictures;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cached = this.getCache(id);
            if (cached != null) {
                return cached;
            }
            const { data } = yield this.main.client.api.request(this.generateURL(['p', id]), {
                method: 'GET'
            });
            return this.setCache(id, new PictureResource(this, data._id, data));
        });
    }
    create(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: { pictureId } } = yield this.main.client.api.request(this.generateURL(['p']), {
                method: 'PUT',
                body: {
                    fileId: file.id
                }
            });
            return yield this.get(pictureId);
        });
    }
    delete(picture) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.main.client.api.request(this.generateURL(['p', picture.id]), {
                method: 'DELETE'
            });
        });
    }
}
