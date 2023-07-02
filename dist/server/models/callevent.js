"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const calleventSchema = new mongoose.Schema({
    leadId: { type: String, ref: 'Lead' },
    userId: { type: String, ref: 'User' },
    subject: String,
    type: String,
    date: Date,
    time: String,
    status: String,
    remarks: String,
});
const Callevent = mongoose.model('Callevent', calleventSchema);
exports.default = Callevent;
//# sourceMappingURL=callevent.js.map