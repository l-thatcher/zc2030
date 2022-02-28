import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

// Option 3: Passing parameters separately (other dialects)
export const sequelizeConfig = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.PORT,
        logging: false,
        dialect: process.env.dialect,
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        dialectOptions: {
            ssl: {
                ca: "../../certificates/DigiCertGlobalRootCA.crt.pem",
                rejectUnauthorized: false,
                require: true
            }
        },
    }
);
