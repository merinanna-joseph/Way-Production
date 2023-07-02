"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const feeflowSchema = new mongoose.Schema({
    // paidAmount: String,
    paymentMode: String,
    remarks: String,
    lastPaidDate: Date,
    // feeStructure: {},
    fee_per_year: {},
    studentId: { type: String, ref: 'Student' },
    ispaid: Boolean,
});
const Feeflow = mongoose.model('Feeflow', feeflowSchema);
exports.default = Feeflow;
//# sourceMappingURL=feeflow.js.map