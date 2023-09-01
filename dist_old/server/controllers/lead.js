"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("./base");
const lead_1 = require("../models/lead");
class LeadCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = lead_1.default;
        this.getbyassignedToId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ assignedTo: req.params.id }).populate('assignedBy').populate('assignedTo').populate('createdBy');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getLeadById = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ _id: req.params.id }).populate('assignedBy').populate('assignedTo').populate('createdBy');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getLeadswithUser = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('assignedBy').populate('assignedTo').populate('createdBy');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getLeadByUserWithAssignedTo = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ assignedTo: req.params.assigned_to });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = LeadCtrl;
//# sourceMappingURL=lead.js.map