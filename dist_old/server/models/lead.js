"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema({
    courseId: { type: String, ref: 'Course' },
    createdOn: Date,
    createdBy: { type: String, ref: 'User' },
    status: String,
    assignedBy: { type: String, ref: 'User' },
    assignedTo: { type: String, ref: 'User' },
    assignedStatus: String,
    firstName: String,
    lastName: String,
    mobile: String,
    email: String,
    closedOn: Date,
    discount: String,
    finalAmount: String,
    remarks: String,
    source: String,
    priorityStatus: String
});
const Lead = mongoose.model('Lead', leadSchema);
exports.default = Lead;
//# sourceMappingURL=lead.js.map