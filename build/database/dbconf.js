"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const headline_1 = require("../database/models/headline");
exports.appDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    host: "mongoscrap",
    port: 27017,
    username: 'ricardo',
    password: 'testpass',
    database: "scrapingdata",
    authSource: "admin",
    entities: [headline_1.Headline],
    useUnifiedTopology: true
});
exports.appDataSource.initialize().then(() => {
    // Start DB
}).catch((error) => console.log("Error de conexion", error));
