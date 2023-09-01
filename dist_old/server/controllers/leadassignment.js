"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("./base");
const leadassignment_1 = require("../models/leadassignment");
class LeadAssignmentCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = leadassignment_1.default;
        this.getLeadassignmentsById = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('leadId').populate('assignedBy');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = LeadAssignmentCtrl;
//# sourceMappingURL=leadassignment.js.map