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
exports.scrapandStore = void 0;
const dbCrud_1 = require("../database/dbCrud");
const scrapingFunctions_1 = require("../lib/scrapingFunctions");
function scrapandStore() {
    return __awaiter(this, void 0, void 0, function* () {
        const elMundo = yield (0, scrapingFunctions_1.scrapHeadlines)('https://www.elmundotoday.com/', 'h3.entry-title a');
        (0, dbCrud_1.storeDB)(elMundo, 'https://www.elmundotoday.com/');
        const elPais = yield (0, scrapingFunctions_1.scrapHeadlines)('https://elpais.com/', 'h2.c_t a');
        (0, dbCrud_1.storeDB)(elPais, 'https://elpais.com/');
        return [...elMundo, ...elPais];
    });
}
exports.scrapandStore = scrapandStore;
