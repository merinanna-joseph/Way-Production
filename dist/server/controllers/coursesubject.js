"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coursesubject_1 = require("../models/coursesubject");
const base_1 = require("./base");
class CoursesubjectCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = coursesubject_1.default;
        this.getCoursesubjectsByCourse = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ courseId: req.params.courseId }).populate('courseId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getCoursesubjectsByBooklibrary = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ courseId: req.params.courseId, yearIndex: req.params.yearIndex }).populate('courseId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = CoursesubjectCtrl;
//# sourceMappingURL=coursesubject.js.map