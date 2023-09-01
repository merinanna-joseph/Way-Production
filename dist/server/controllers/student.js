"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("./base");
const student_1 = require("../models/student");
var fs = require('fs');
class StudentCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = student_1.default;
        this.student = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (req.body.tally_ID && req.body.university_register_number) {
                req.body.tally_ID = req.body.tally_ID.toUpperCase();
                req.body.university_register_number = req.body.university_register_number.toUpperCase();
                this.model.findOne({ tally_ID: req.body.tally_ID }, (err, student) => {
                    if (student) {
                        this.tally = false;
                        return res.status(400).json({ message: "Tally id already exists" });
                    }
                    else if (!student) {
                        this.tally = true;
                        this.model.findOne({ university_register_number: req.body.university_register_number }, (err, stud) => {
                            if (stud) {
                                this.reg = false;
                                return res.status(400).json({ message: "Register number already exists" });
                            }
                            if (!stud) {
                                req.body.username = req.body.username.toLowerCase();
                                this.model.findOne({ username: req.body.username }, (err, user) => {
                                    if (!user) {
                                        this.insert(req, res);
                                    }
                                    else {
                                        return res.status(400).json({ message: "Username already exists" });
                                    }
                                });
                            }
                        });
                    }
                });
            }
            else if (req.body.tally_ID && !req.body.university_register_number) {
                req.body.tally_ID = req.body.tally_ID.toUpperCase();
                this.model.findOne({ tally_ID: req.body.tally_ID }, (err, student) => {
                    if (student) {
                        this.tally = false;
                        return res.status(400).json({ message: "Tally id already exists" });
                    }
                    else if (!student) {
                        req.body.username = req.body.username.toLowerCase();
                        this.model.findOne({ username: req.body.username }, (err, user) => {
                            if (!user) {
                                this.insert(req, res);
                            }
                            else {
                                return res.status(400).json({ message: "Username already exists" });
                            }
                        });
                    }
                });
            }
            else if (!req.body.tally_ID && req.body.university_register_number) {
                req.body.university_register_number = req.body.university_register_number.toUpperCase();
                this.model.findOne({ university_register_number: req.body.university_register_number }, (err, stud) => {
                    if (stud) {
                        this.reg = false;
                        return res.status(400).json({ message: "Register number already exists" });
                    }
                    if (!stud) {
                        req.body.username = req.body.username.toLowerCase();
                        this.model.findOne({ username: req.body.username }, (err, user) => {
                            if (!user) {
                                this.insert(req, res);
                            }
                            else {
                                return res.status(400).json({ message: "Username already exists" });
                            }
                        });
                    }
                });
            }
            else {
                req.body.username = req.body.username.toLowerCase();
                this.model.findOne({ username: req.body.username }, (err, user) => {
                    if (!user) {
                        this.insert(req, res);
                    }
                    else {
                        return res.status(400).json({ message: "Username already exists" });
                    }
                });
            }
        });
        this.studentupdate = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (req.body.tally_ID && req.body.university_register_number) {
                req.body.tally_ID = req.body.tally_ID.toUpperCase();
                req.body.university_register_number = req.body.university_register_number.toUpperCase();
                this.model.findOne({ tally_ID: req.body.tally_ID }, (err, student) => {
                    if (student) {
                        if (student._id != req.body._id) {
                            return res.status(400).json({ message: "Tally id already exists" });
                        }
                        else {
                            this.model.findOne({ university_register_number: req.body.university_register_number }, (err, stud) => {
                                if (stud) {
                                    if (stud._id != req.body._id) {
                                        return res.status(400).json({ message: "Register number already exists" });
                                    }
                                    if (stud._id == req.body._id) {
                                        req.body.username = req.body.username.toLowerCase();
                                        this.model.findOne({ username: req.body.username }, (err, user) => {
                                            if (!user) {
                                                this.updatestudent(req, res);
                                            }
                                            else {
                                                return res.status(400).json({ message: "Username already exists" });
                                            }
                                        });
                                    }
                                }
                                else if (!stud) {
                                    req.body.username = req.body.username.toLowerCase();
                                    this.model.findOne({ username: req.body.username }, (err, user) => {
                                        if (!user) {
                                            this.updatestudent(req, res);
                                        }
                                        else {
                                            return res.status(400).json({ message: "Username already exists" });
                                        }
                                    });
                                }
                            });
                        }
                    }
                    else if (!student) {
                        this.model.findOne({ university_register_number: req.body.university_register_number }, (err, stud) => {
                            if (stud) {
                                if (stud._id != req.body._id) {
                                    return res.status(400).json({ message: "Register number already exists" });
                                }
                                if (stud._id == req.body._id) {
                                    // update id
                                    req.body.username = req.body.username.toLowerCase();
                                    this.model.findOne({ username: req.body.username }, (err, user) => {
                                        if (!user) {
                                            this.updatestudent(req, res);
                                        }
                                        else {
                                            return res.status(400).json({ message: "Username already exists" });
                                        }
                                    });
                                }
                            }
                            else if (!stud) {
                                req.body.username = req.body.username.toLowerCase();
                                this.model.findOne({ username: req.body.username }, (err, user) => {
                                    if (!user) {
                                        this.updatestudent(req, res);
                                    }
                                    else {
                                        return res.status(400).json({ message: "Username already exists" });
                                    }
                                });
                            }
                        });
                    }
                });
            }
            else if (req.body.tally_ID && !req.body.university_register_number) {
                req.body.tally_ID = req.body.tally_ID.toUpperCase();
                this.model.findOne({ tally_ID: req.body.tally_ID }, (err, student) => {
                    if (student) {
                        if (student._id != req.body._id) {
                            this.tally = false;
                            return res.status(400).json({ message: "Tally id already exists" });
                        }
                        if (student._id == req.body._id) {
                            req.body.username = req.body.username.toLowerCase();
                            this.model.findOne({ username: req.body.username }, (err, user) => {
                                if (!user) {
                                    this.updatestudent(req, res);
                                }
                                else {
                                    return res.status(400).json({ message: "Username already exists" });
                                }
                            });
                        }
                    }
                    else if (!student) {
                        req.body.username = req.body.username.toLowerCase();
                        this.model.findOne({ username: req.body.username }, (err, user) => {
                            if (!user) {
                                this.updatestudent(req, res);
                            }
                            else {
                                return res.status(400).json({ message: "Username already exists" });
                            }
                        });
                    }
                });
            }
            else if (!req.body.tally_ID && req.body.university_register_number) {
                req.body.university_register_number = req.body.university_register_number.toUpperCase();
                this.model.findOne({ university_register_number: req.body.university_register_number }, (err, stud) => {
                    if (stud) {
                        if (stud._id != req.body._id) {
                            return res.status(400).json({ message: "Register number already exists" });
                        }
                        if (stud._id == req.body._id) {
                            req.body.username = req.body.username.toLowerCase();
                            this.model.findOne({ username: req.body.username }, (err, user) => {
                                if (!user) {
                                    this.updatestudent(req, res);
                                }
                                else {
                                    return res.status(400).json({ message: "Username already exists" });
                                }
                            });
                        }
                    }
                    else if (!stud) {
                        req.body.username = req.body.username.toLowerCase();
                        this.model.findOne({ username: req.body.username }, (err, user) => {
                            if (!user) {
                                this.updatestudent(req, res);
                            }
                            else {
                                return res.status(400).json({ message: "Username already exists" });
                            }
                        });
                    }
                });
            }
            else {
                req.body.username = req.body.username.toLowerCase();
                this.model.findOne({ username: req.body.username }, (err, user) => {
                    if (!user) {
                        this.updatestudent(req, res);
                    }
                    else {
                        return res.status(400).json({ message: "Username already exists" });
                    }
                });
            }
        });
        this.getStudentByCourseandFees = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.find({ _id: req.params.id }).populate('lead_officer');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
        this.getStudentsWithALLDetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                docs = yield this.model.find({}).populate('lead_officer');
                for (var i = 0; i < docs.length; i++) {
                    if (!docs[i].istemporarysaved) {
                        if (!docs[i].closingType) {
                            obj.push(docs[i]);
                        }
                    }
                }
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getSubmittedStudentsWithALLDetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                docs = yield this.model.find({}).populate('lead_officer');
                for (var i = 0; i < docs.length; i++) {
                    if (!docs[i].istemporarysaved) {
                        if (!docs[i].closingType) {
                            obj.push(docs[i]);
                        }
                    }
                }
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getSavedStudentsWithALLDetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                docs = yield this.model.find({}).populate('lead_officer');
                for (var i = 0; i < docs.length; i++) {
                    if (docs[i].istemporarysaved) {
                        if (!docs[i].closingType) {
                            obj.push(docs[i]);
                        }
                    }
                }
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getClosedStudentsWithALLDetails = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                docs = yield this.model.find({}).populate('lead_officer');
                for (var i = 0; i < docs.length; i++) {
                    if (!docs[i].istemporarysaved) {
                        if (docs[i].closingType) {
                            obj.push(docs[i]);
                        }
                    }
                }
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getStudentByFeeId = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ _id: req.params.id }).populate('lead_officer').populate('feeID');
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getCountOfStudentswithCourse = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ courseID: req.params.cid }).count();
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.countSubmittedStudent = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var docs = [];
                var obj = [];
                var totalCount = 0;
                docs = yield this.model.find({});
                for (var i = 0; i < docs.length; i++) {
                    if (!docs[i].istemporarysaved) {
                        if (!docs[i].closingType) {
                            obj.push(docs[i]);
                        }
                    }
                }
                totalCount = obj.length;
                res.status(200).json(totalCount);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getStudentByUsername = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOne({ username: req.params.username }).populate('lead_officer').populate('courseID').populate('feeID').populate('Trainer');
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ message: "Student not found" });
                // return res.status(500).json({ error: err.message });
            }
        });
        this.deleteImagepathfromdirectory = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // const path = req.body.path;
                const path = 'thewaydocument/studentdocuments/' + req.body.id + '/' + req.body.name;
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
        this.countStudentbyCenters = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                var obj = [];
                const count = yield this.model.countDocuments({ istemporarysaved: false, closingType: { $exists: false } });
                // console.log(count,"count");
                obj.push({ '_id': 'ALL', 'count': count });
                const data = yield this.model.aggregate([
                    { $match: { istemporarysaved: false, closingType: { $exists: false } } },
                    {
                        $group: {
                            _id: '$centers',
                            count: { $sum: 1 } // this means that the count will increment by 1
                        }
                    }
                ]);
                // const data = await this.model.aggregate().sortByCount("centers");
                // console.log(data," ata");
                for (var i = 0; i < data.length; i++) {
                    obj.push(data[i]);
                }
                // console.log(obj,"obj")
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = StudentCtrl;
//# sourceMappingURL=student.js.map