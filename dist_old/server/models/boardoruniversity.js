"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const boardoruniversitySchema = new mongoose.Schema({
    boardoruniveristy: String,
    courseDetails: {},
});
const BoardOrUniversity = mongoose.model('BoardOrUniversity', boardoruniversitySchema);
exports.default = BoardOrUniversity;
//# sourceMappingURL=boardoruniversity.js.map