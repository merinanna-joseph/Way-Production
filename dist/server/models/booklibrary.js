"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const booklibrarySchema = new mongoose.Schema({
    name: String,
    branch: String,
    boardOrUniversity: { type: String, ref: 'BoardOrUniversity' },
    courseType: String,
    // numberofyears:String,
    //   feeId:{ type: String, ref: 'Fee' },
    coursenameId: { type: String, ref: 'Coursename' },
    coursebranchId: { type: String, ref: 'Branch' },
});
const Booklibrary = mongoose.model('Booklibrary', booklibrarySchema);
exports.default = Booklibrary;
//# sourceMappingURL=booklibrary.js.map