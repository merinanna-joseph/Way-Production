"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const studymaterialSchema = new mongoose.Schema({
    subject: { type: String, ref: 'Coursesubject' },
    name: String,
    materials: [],
});
const Studymaterial = mongoose.model('Studymaterial', studymaterialSchema);
exports.default = Studymaterial;
//# sourceMappingURL=studymaterials.js.map