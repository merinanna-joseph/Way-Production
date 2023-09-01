"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class BaseCtrl {
    constructor() {
        // Get all
        this.getAll = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({});
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Count all
        this.count = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                console.log("LLLL");
                const count = yield this.model.count();
                res.status(200).json(count);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        // Insert
        this.insert = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield new this.model(req.body).save();
                res.status(201).json(obj);
            }
            catch (err) {
                return res.status(400).json({ message: err.message });
            }
        });
        // Get by id
        this.get = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOne({ _id: req.params.id });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ message: "Register number already exists" });
                // return res.status(500).json({ error: err.message });
            }
        });
        // Update by id
        this.update = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(req.body)
                const obj = yield this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
                res.sendStatus(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.updatestudent = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
                // res.sendStatus(200).json(obj);
                res.status(200).send({ status: 'OK' });
            }
            catch (err) {
                return res.status(400).json({ message: err.message });
            }
        });
        // Delete by id
        this.delete = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.findOneAndRemove({ _id: req.params.id });
                res.sendStatus(200);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.uploadFile = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof req.file !== 'undefined') {
                if (req.params.type == 'studymaterials') {
                    res.json({
                        // imageUrl: 'http://206.189.140.241:4200/'+req.params.type+'/'+req.params.studymaterialid+'/' + req.file.filename,
                        imageUrl: 'https://admintimes.com/' + req.params.type + '/' + req.params.studymaterialid + '/' + req.file.filename,
                        // imageUrl:'http://localhost:3000/images/'+req.params.type+'/'+req.params.studymaterialid+'/' + req.file.filename,
                        imageName: req.file.filename
                    });
                }
                else if (req.params.type == 'studentdocuments') {
                    res.json({
                        // imageUrl: 'http://206.189.140.241:4200/'+req.params.type+'/'+req.params.studentid+'/' + req.file.filename,
                        imageUrl: 'https://admintimes.com/' + req.params.type + '/' + req.params.studentid + '/' + req.file.filename,
                        // imageUrl:'server/public/images/'+req.params.type+'/'+req.params.studentid+'/' + req.file.filename,
                        imageName: req.file.filename
                    });
                }
            }
            else {
                res.status(400).json({
                    msg: 'please upload a valid file'
                });
            }
        });
        this.uploadsFile = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            //  let images=[];
            //  for(let i=0;i<req.files.length;i++){
            //  let imageUrl='http://localhost:3000/images/'+req.files[i].filename
            //  images.push(imageUrl)
            //  }
            //  res.json({
            //   images
            // })
            // console.log(req.files,"files in back")
            if (typeof req.files !== 'undefined') {
                res.json({
                    imageUrl: req.files,
                });
            }
            else {
                res.status(400).json({
                    msg: 'please upload a valid file'
                });
            }
        });
        this.getAlldata = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            res.json({
                imageUrl: 'http://localhost:3000/images/5001000.png'
            });
        });
    }
}
exports.default = BaseCtrl;
//# sourceMappingURL=base.js.map