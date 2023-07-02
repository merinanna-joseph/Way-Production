"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const coursenameSchema = new mongoose.Schema({
    coursename: String
});
const Coursename = mongoose.model('Coursename', coursenameSchema);
exports.default = Coursename;
//# sourceMappingURL=coursename.js.map