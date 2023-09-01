"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const branch_1 = require("../models/branch");
const base_1 = require("./base");
class BranchCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = branch_1.default;
        this.getBrancheByCourseId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ courseId: req.params.courseID });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getCountofBranchsbyCourseID = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ courseId: req.params.coursenameId }).count();
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = BranchCtrl;
//# sourceMappingURL=branch.js.map