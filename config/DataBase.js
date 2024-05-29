import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

process.env.DB_USER
process.env.DB_PASSWORD
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Puerto por defecto para PostgreSQL
    dialect:process.env.DB_DIALECT
});

export default db;
