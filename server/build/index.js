"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 8000;
app.use((0, cors_1.default)());
app.get('/ping', function (_req, res) {
    res.send({ fine: true });
});
app.listen(port, function () { return console.log("Server is listening on port ".concat(port, "!")); });
//# sourceMappingURL=index.js.map