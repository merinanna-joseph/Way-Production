"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const leadassignmentSchema = new mongoose.Schema({
    leadId: { type: String, ref: 'Lead' },
    assignedBy: { type: String, ref: 'User' },
    assignedTo: String,
    assignedOn: Date,
    status: String,
    respondedon: Date,
});
const Leadassignment = mongoose.model('Leadassignment', leadassignmentSchema);
exports.default = Leadassignment;
//# sourceMappingURL=leadassignment.js.map