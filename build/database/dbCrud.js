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
exports.readDB = exports.storeDB = void 0;
const dbconf_1 = require("./dbconf");
const headline_1 = require("./models/headline");
function storeDB(headlinesArray, urlOrigin) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const el of headlinesArray) {
            try {
                //Sometime the headline has other structure and returns NULL
                if (el != null) {
                    const newheadline = new headline_1.Headline();
                    newheadline.urlOrigin = urlOrigin;
                    newheadline.headline = el;
                    newheadline.date = new Date();
                    yield dbconf_1.appDataSource.manager.save(newheadline);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    });
}
exports.storeDB = storeDB;
function readDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const heads = yield dbconf_1.appDataSource.getRepository(headline_1.Headline).find();
            return heads;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    });
}
exports.readDB = readDB;
