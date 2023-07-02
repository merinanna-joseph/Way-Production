"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const booklibrary_1 = require("../models/booklibrary");
const base_1 = require("./base");
class BooklibraryCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = booklibrary_1.default;
        this.getBooklibraryWithId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ _id: req.params.id }).populate('boardOrUniversity').populate('coursenameId').populate('coursebranchId');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getAllBooklibraryWithALLDetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('boardOrUniversity').populate('coursenameId').populate('coursebranchId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getBooklibraryWithNameBranchType = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                docs = yield this.model.find({ boardOrUniversity: req.params.university
                }).populate('boardOrUniversity').populate('coursenameId').populate('coursebranchId');
                console.log(docs, "dddd");
                for (var i = 0; i < docs.length; i++) {
                    if (docs[i].coursenameId.coursename == req.params.name &&
                        docs[i].coursebranchId.branch == req.params.branch &&
                        docs[i].courseType == req.params.ctype) {
                        console.log(docs[i], "doc");
                        obj.push(docs[i]);
                    }
                }
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getBooklibraryWithNameType = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                docs = yield this.model.find({ boardOrUniversity: req.params.university
                }).populate('boardOrUniversity').populate('coursenameId').populate('coursebranchId');
                //  console.log(docs,"dddd")
                for (var i = 0; i < docs.length; i++) {
                    if (docs[i].coursenameId.coursename == req.params.name &&
                        docs[i].courseType == req.params.ctype) {
                        // console.log(docs[i],"doc")
                        obj.push(docs[i]);
                    }
                }
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = BooklibraryCtrl;
//# sourceMappingURL=booklibrary.js.map