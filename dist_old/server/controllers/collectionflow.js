"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const collectionflow_1 = require("../models/collectionflow");
const base_1 = require("./base");
class CollectionflowCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = collectionflow_1.default;
        this.getcollectionFlowsWithStudentId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ studentId: req.params.studentID }).populate('studentId');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.deleteCollectionflowByStudent = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.findOneAndRemove({ studentId: req.params.id });
                res.sendStatus(200);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getallbookswithstudentdetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ collectionType: 'BOOK' }).populate('studentId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getallcertificateswithstudentdetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ collectionType: 'CERTIFICATE' }).populate('studentId');
                console.log(docs);
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getalltransportwithstudentdetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ collectionType: 'TRANSPORT' }).populate('studentId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = CollectionflowCtrl;
//# sourceMappingURL=collectionflow.js.map