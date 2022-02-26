import dotenv from 'dotenv';
import UserModel from '../models/UserModel';

const { Sequelize } = require('@sequelize/core');

dotenv.config();
export const sequelizeConfig = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
      host: process.env.HOST,
      port: process.env.PORT,
      logging: false,
      dialect: process.env.DIALECT,
      operatorsAliases: false,
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
      },
      dialectOptions: {
          ssl: {
              ca: "../certificates/DigiCertGlobalRootCA.crt.pem",
              rejectUnauthorized: false,
              require: true
          }
      },
  }
);


const db = {};

db.Sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;

db.UserModel = UserModel;

db.sequelizeConfig.sync({ force: false }).then(() => {
  console.log('yes re-sync done!');
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
