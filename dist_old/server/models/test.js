"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
    title: String,
    imagePath: String,
});
const Test = mongoose.model('Test', testSchema);
exports.default = Test;
//# sourceMappingURL=test.js.map