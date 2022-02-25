import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import * as fs from "fs";

const { Sequelize } = require('@sequelize/core');

dotenv.config();



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.PORT,
    logging: false,
    dialect: process.env.dialect,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    },
});

export default async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}
