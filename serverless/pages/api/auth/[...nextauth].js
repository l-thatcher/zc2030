import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {sequelizeConfig} from "../../../utils/db";
import dotenv from 'dotenv';
import SequelizeAdapter, {models} from "@next-auth/sequelize-adapter";
import {DataTypes} from "@sequelize/core";

dotenv.config();

// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
const sequelize = sequelizeConfig

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("user", {
        ...models.User,
        ethAddress: DataTypes.STRING
      })
    }
  }),
})






