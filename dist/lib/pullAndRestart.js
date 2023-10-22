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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullAndRestart = void 0;
const child_process_1 = require("child_process");
const pullAndRestart = (imageName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Pulling Image | ", imageName);
    (0, child_process_1.exec)("docker pull " + imageName, (err, stdout, stderr) => {
        if (err) {
            console.log("Error pulling image | ", err);
            return;
        }
        console.log("Image Pulled | ", stdout);
        (0, child_process_1.exec)("docker ps -qf ancestor=" + imageName, (err, stdout, stderr) => {
            if (err) {
                console.log("Error finding container | ", err);
                return;
            }
            console.log("Found Container | ", stdout);
            const containerId = stdout;
            console.log("Restarting Container | ", containerId);
            (0, child_process_1.exec)("docker restart " + containerId, (err, stdout, stderr) => {
                if (err) {
                    console.log("Error restarting container | ", err);
                    return;
                }
                console.log("Container Restarted | ", stdout);
            });
        });
    });
});
exports.pullAndRestart = pullAndRestart;
