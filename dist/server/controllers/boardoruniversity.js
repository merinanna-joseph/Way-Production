"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardoruniversity_1 = require("../models/boardoruniversity");
const base_1 = require("./base");
class BoardOrUniversityCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = boardoruniversity_1.default;
    }
}
exports.default = BoardOrUniversityCtrl;
//# sourceMappingURL=boardoruniversity.js.map