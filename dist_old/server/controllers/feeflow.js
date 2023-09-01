"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const feeflow_1 = require("../models/feeflow");
const base_1 = require("./base");
class FeeflowCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = feeflow_1.default;
        this.getFeeflowsWithStudentId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ studentId: req.params.studentID }).populate('studentId');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getFeeflowsWithAllStudents = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('studentId');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getFeeflowsWithAllGroupedStudents = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({}).populate('studentId');
                var grouped = this.groupBy("studentId", docs);
                res.status(200).json(grouped);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getFeeflowsWithAllGroupedStudentsByYear = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let y1, y2, y3;
                y1 = req.params.year1;
                y2 = req.params.year2;
                y3 = req.params.year3;
                const docs = yield this.model.find({}).populate('studentId');
                var grouped = this.groupByYear("studentId", docs, y1, y2, y3);
                console.log("students", grouped);
                res.status(200).json(grouped);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
    groupBy(key, array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (!array[i].studentId.istemporarysaved) {
                if (!array[i].studentId.closingType) {
                    var added = false;
                    for (var j = 0; j < result.length; j++) {
                        if (result[j][key] == array[i][key]) {
                            result[j].items = [];
                            result[j].items.push(array[i]);
                            added = true;
                            break;
                        }
                    }
                    if (!added) {
                        var entry = { items: [] };
                        entry[key] = array[i][key];
                        entry.items.push(array[i]);
                        result.push(entry);
                    }
                }
            }
        }
        return result;
    }
    groupByYear(key, array, year1, year2, year3) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (!array[i].studentId.istemporarysaved) {
                if (!array[i].studentId.closingType) {
                    // console.log(array[i].fee_per_year[0]);
                    if (array[i].fee_per_year[0].year == year1 || array[i].fee_per_year[0].year == year2 || array[i].fee_per_year[0].year == year3) {
                        var added = false;
                        for (var j = 0; j < result.length; j++) {
                            if (result[j][key] == array[i][key]) {
                                result[j].items = [];
                                result[j].items.push(array[i]);
                                added = true;
                                break;
                            }
                        }
                        if (!added) {
                            var entry = { items: [] };
                            entry[key] = array[i][key];
                            entry.items.push(array[i]);
                            result.push(entry);
                        }
                    }
                }
            }
        }
        return result;
    }
}
exports.default = FeeflowCtrl;
//# sourceMappingURL=feeflow.js.map