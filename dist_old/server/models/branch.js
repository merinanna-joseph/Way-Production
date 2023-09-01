"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const branchSchema = new mongoose.Schema({
    branch: String,
    courseId: { type: String, ref: 'Coursename' }
});
const Branch = mongoose.model('Branch', branchSchema);
exports.default = Branch;
//# sourceMappingURL=branch.js.map