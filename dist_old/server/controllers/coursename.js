"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coursename_1 = require("../models/coursename");
const base_1 = require("./base");
class CoursenameCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = coursename_1.default;
        this.getCoursenameById = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ _id: req.params.courseID });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = CoursenameCtrl;
//# sourceMappingURL=coursename.js.map