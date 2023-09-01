"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const centerSchema = new mongoose.Schema({
    center: String
});
const Center = mongoose.model('Center', centerSchema);
exports.default = Center;
//# sourceMappingURL=center.js.map