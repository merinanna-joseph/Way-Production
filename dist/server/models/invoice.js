"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
    // year: String,
    paymentMode: String,
    remittedDate: Date,
    // registration_fee: Number,
    // coaching_fee: Number,
    // exam_fee: Number,
    // convocation_fee: Number,
    // attestation_fee: Number,
    // equalency_fee: Number,
    // other_fee: Number,
    miscellaneous_fee: Number,
    transport_fee: Number,
    previousyear_arrear: Number,
    total_course_fee: Number,
    total_remitted_fee: Number,
    remarks: String,
    studentId: { type: String, ref: 'Student' },
    total_fee: Number,
    balance_fee: Number,
});
const Invoice = mongoose.model('Invoice', invoiceSchema);
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map