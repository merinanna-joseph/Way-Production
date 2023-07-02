"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("./base");
const fee_1 = require("../models/fee");
class FeeCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = fee_1.default;
        this.getFeesByCourse = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('courseId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = FeeCtrl;
//# sourceMappingURL=fee.js.map