"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    name: String,
    durationInYear: String,
    durationInMonths: String,
    branch: String,
    intake: String,
    boardOrUniversity: { type: String, ref: 'BoardOrUniversity' },
    courseType: String,
    startYear: String,
    endYear: String,
    // feeId:{ type: String, ref: 'Fee' },
    coursenameId: String,
    coursebranchId: String,
    centers: String,
});
const Course = mongoose.model('Course', courseSchema);
exports.default = Course;
//# sourceMappingURL=course.js.map