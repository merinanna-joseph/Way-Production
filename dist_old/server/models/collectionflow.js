"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const collectionflowSchema = new mongoose.Schema({
    year: String,
    collectedOn: Date,
    // totAmount: String,
    // paidAmount: String,
    collectionType: String,
    remarks: String,
    isCertificateCollected: Boolean,
    isBookCollected: Boolean,
    isTransportationNeeded: Boolean,
    month_list: [],
    studentId: { type: String, ref: 'Student' },
});
const Collectionflow = mongoose.model('Collectionflow', collectionflowSchema);
exports.default = Collectionflow;
//# sourceMappingURL=collectionflow.js.map