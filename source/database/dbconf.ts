import "reflect-metadata";
import { DataSource } from "typeorm";
import { Headline } from "../database/models/headline";

export const appDataSource = new DataSource({
    type: "mongodb",
    host: "mongoscrap",
    port: 27017,
    username: 'ricardo',
    password: 'testpass',
    database: "scrapingdata",
    authSource: "admin",
    entities: [Headline],
    useUnifiedTopology: true
});

appDataSource.initialize().then(() => {
    // Start DB
}).catch((error) => console.log("Error de conexion", error));