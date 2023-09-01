"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const couresesubjectSchema = new mongoose.Schema({
    courseId: { type: String, ref: 'Booklibrary' },
    // feeId:{ type: String, ref: 'Fee' },
    subject: String,
});
const Coursesubject = mongoose.model('Coursesubject', couresesubjectSchema);
exports.default = Coursesubject;
//# sourceMappingURL=coursesubject.js.map