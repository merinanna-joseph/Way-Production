"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../models/test");
const base_1 = require("./base");
class TestCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = test_1.default;
    }
}
exports.default = TestCtrl;
//# sourceMappingURL=test.js.map