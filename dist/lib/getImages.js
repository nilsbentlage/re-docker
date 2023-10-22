"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRoutes = void 0;
const child_process_1 = require("child_process");
const crypto_1 = __importDefault(require("crypto"));
function returnRoutes() {
    return __awaiter(this, void 0, void 0, function* () {
        let dockerData;
        const routes = new Promise((resolve, reject) => {
            (0, child_process_1.exec)("docker ps --format json", (err, stdout, stderr) => {
                if (err) {
                    console.log("Error searching for Images | ", err);
                    return;
                }
                dockerData = JSON.parse(stdout);
                const imageNames = [dockerData.Image];
                resolve(imageNames.map((image) => {
                    return {
                        imageName: image,
                        hookUrl: crypto_1.default.randomUUID(),
                    };
                }));
            });
        });
        const test = yield routes;
        return yield test;
    });
}
exports.returnRoutes = returnRoutes;
