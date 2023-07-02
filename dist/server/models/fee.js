"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const feeSchema = new mongoose.Schema({
    courseId: { type: String, ref: 'Course' },
    feeStructure: [],
    totalAmount: { type: Number, default: 0 }
});
const Fee = mongoose.model('Fee', feeSchema);
exports.default = Fee;
//# sourceMappingURL=fee.js.map