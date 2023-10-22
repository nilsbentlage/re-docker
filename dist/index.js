"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRoutes_1 = require("./lib/createRoutes");
const getImages_1 = require("./lib/getImages");
const app = (0, express_1.default)();
const port = 3000;
(0, getImages_1.returnRoutes)()
    .then((autoRoutes) => {
    console.table(autoRoutes);
    const config = { routes: autoRoutes || [] };
    (0, createRoutes_1.createRoutes)(app, config);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})
    .catch((err) => console.log("Error: ", err));
