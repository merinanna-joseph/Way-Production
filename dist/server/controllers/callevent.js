"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("./base");
const callevent_1 = require("../models/callevent");
class CallEventCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = callevent_1.default;
        this.getByLead = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ leadId: req.params.id }).populate('userId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getByUser = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ userId: req.params.id }).populate('userId').populate('leadId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getcalleventByUserId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ _id: req.params.id }).populate('userId').populate('leadId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.allCalleventsByLead = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('leadId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getcalleventByUserIdAndLeadId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ userId: req.params.userId, leadId: req.params.leadId });
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = CallEventCtrl;
//# sourceMappingURL=callevent.js.map