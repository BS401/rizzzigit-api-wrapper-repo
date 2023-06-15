import { __awaiter } from "tslib";
import { NewsResource } from '../data/news.js';
import { BaseManager } from './base.js';
export class NewsManager extends BaseManager {
    constructor(main) {
        super(main, 'news');
    }
    list(offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            const { main: { client: { api } } } = this;
            return (yield api.request(this.generateURL(['n'], { offset, length }), { method: 'GET' })).data.map((entry) => new NewsResource(this, entry._id, entry));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { main: { client: { options: { baseUrl }, api } } } = this;
            const url = new URL(baseUrl);
            url.pathname = `/n/${id}`;
            const { data } = yield api.request(url, { method: 'GET' });
            return new NewsResource(this, data._id, data);
        });
    }
    create(title, thumbnail, contents) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: { newsId } } = yield this.main.client.api.request(this.generateURL(['n']), {
                method: 'PUT',
                body: { title, thumbnail: thumbnail.id, contents }
            });
            return yield this.get(newsId);
        });
    }
}
export var NewsContentType;
(function (NewsContentType) {
    NewsContentType[NewsContentType["Image"] = 0] = "Image";
    NewsContentType[NewsContentType["Text"] = 1] = "Text";
    NewsContentType[NewsContentType["Link"] = 2] = "Link";
})(NewsContentType || (NewsContentType = {}));
