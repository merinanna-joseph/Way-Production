"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const studymaterials_1 = require("../models/studymaterials");
const base_1 = require("./base");
var fs = require('fs');
class StudymaterialCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = studymaterials_1.default;
        this.getStudymaterialsBySubject = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ subject: req.params.subjectId }).populate('subject');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.deleteImagepathfromdirectory = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // const path = req.body.path;
                const path = 'timesdocument/studymaterials/' + req.body.id + '/' + req.body.name;
                // const path ='server/public/images/studentdocuments/630f1859b53bdc4278e0c2e3/tree-736885__480.jpg-1662145055440.png'
                console.log(path, "   imgpath");
                fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err);
                        // console.log("not removed");
                        const objj = { message: err };
                        res.status(200).json(objj);
                        // return
                    }
                    else {
                        // console.log("removed");
                        const objj = { message: 'File successfully deleted' };
                        res.status(200).json(objj);
                        //file removed
                    }
                });
            }
            catch (err) {
                // return res.status(400).json({ message: "Student not found" });
                // return res.status(500).json({ error: err.message });
            }
        });
        this.getCountofStudymaterialBysubjectid = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(req.params.subjectId,"id")
                const docs = yield this.model.find({ subject: req.params.subjectId }).count();
                // console.log(docs,'docs')
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = StudymaterialCtrl;
//# sourceMappingURL=studymaterials.js.map