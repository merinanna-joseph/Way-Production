"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const center_1 = require("../models/center");
const base_1 = require("./base");
class CenterCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = center_1.default;
        //   getCoursenameById = async (req, res) => {
        //     try {
        //       const obj = await this.model.find({ _id: req.params.courseID });
        //       res.status(200).json(obj);
        //     } catch (err) {
        //       return res.status(500).json({ error: err.message });
        //     }
        //   }
    }
}
exports.default = CenterCtrl;
//# sourceMappingURL=center.js.map