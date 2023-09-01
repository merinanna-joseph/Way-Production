"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("./base");
const course_1 = require("../models/course");
class CourseCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = course_1.default;
        this.getAllCourseWithBoardName = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('boardOrUniversity');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getSingleCourseandFee = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ _id: req.params.id }).populate('feeId').populate('boardOrUniversity');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getAllCourseandFee = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({}).populate('feeId').populate('boardOrUniversity');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getCoursesWithNamewithBranch = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ name: req.params.name, boardOrUniversity: req.params.university,
                    courseType: req.params.ctype, branch: req.params.branch, centers: req.params.center }).populate('feeId').populate('boardOrUniversity');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getCoursesWithNamewithoutBranch = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ name: req.params.name, boardOrUniversity: req.params.university,
                    courseType: req.params.ctype, centers: req.params.center }).populate('feeId').populate('boardOrUniversity');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getCoursesByUniversityId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ boardOrUniversity: req.params.boardoruniversityID });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getCountOfCourseswithCourseId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ coursenameId: req.params.coursenameId }).count();
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getCountOfCourseswithBranchId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ coursebranchId: req.params.coursebranchId }).count();
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getAllCourseandFeeByCenter = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ centers: req.params.center }).populate('boardOrUniversity');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getCoursesByUniversityIdandCenter = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ boardOrUniversity: req.params.boardoruniversityID, centers: req.params.centername }).populate('boardOrUniversity');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = CourseCtrl;
//# sourceMappingURL=course.js.map