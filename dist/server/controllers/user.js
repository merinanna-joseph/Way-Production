"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt = require("jsonwebtoken");
const user_1 = require("../models/user");
const base_1 = require("./base");
const bcrypt = require("bcryptjs");
class UserCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = user_1.default;
        this.user = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            req.body.email = req.body.email.toLowerCase();
            this.model.findOne({ email: req.body.email }, (err, user) => {
                if (!user) {
                    this.insert(req, res);
                }
                else {
                    return res.status(400).json({ message: "Email already exists" });
                }
            });
        });
        this.login = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.model.findOne({ email: req.body.email }, (err, user) => {
                if (!user) {
                    return res.sendStatus(403);
                }
                user.comparePassword(req.body.password, (error, isMatch) => {
                    if (!isMatch) {
                        return res.sendStatus(403);
                    }
                    const token = jwt.sign({ user: user }, "SECRETforSECRETEASE2020", { expiresIn: "10h" });
                    res.status(200).json({ token: token });
                });
            });
        });
        this.updatePassword = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                const obj = yield this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.updateNewPassword = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                const obj = yield this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.validateCredentials = (req, res) => {
            this.model.findOne({ email: req.body.email }, (err, user) => {
                if (!user) {
                    return res.sendStatus(403);
                }
                else {
                    user.comparePassword(req.body.password, (error, isMatch) => {
                        if (!isMatch) {
                            return res.sendStatus(403);
                        }
                        else {
                            let hash = bcrypt.hashSync(req.body.newPassword, 10);
                            user.password = hash;
                            req.body = user;
                            this.update(req, res);
                        }
                    });
                }
            });
        };
        this.getByUserId = (userId) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOne({ _id: userId });
                return obj;
            }
            catch (err) {
                return "Error";
            }
        });
        // Get by Email
        this.getByEmail = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOne({ email: req.params.email });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
        this.getUserById = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.model.findOne({ _id: req.params.id });
                res.status(200).json(obj);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
        this.deletebyusername = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.findOneAndDelete({ email: req.params.email });
                res.sendStatus(200);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getStaffs = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ roles: { $in: 'staff' } });
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.getTeachers = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const docs = yield this.model.find({ roles: { $in: 'teacher' } });
                res.status(200).json(docs);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
        this.updateStudentCredentials = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                const obj = yield this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
                res.sendStatus(200).json(obj);
            }
            catch (err) {
                return res.status(400).json({ error: err.message });
            }
        });
    }
}
exports.default = UserCtrl;
//# sourceMappingURL=user.js.map