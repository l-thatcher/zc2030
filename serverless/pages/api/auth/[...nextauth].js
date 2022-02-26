import NextAuth from 'next-auth';
import SequelizeAdapter from '@next-auth/sequelize-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { Sequelize } from 'sequelize';
import sequelizeConfig from '../../../utils/db';
import UserModel from '../../../models/UserModel';
import dotenv from 'dotenv';

dotenv.config();
// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
const sequelize = new Sequelize(sequelizeConfig);

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: SequelizeAdapter(sequelize, {
    models: {
      UserModel,
    },
  }),
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin';
      return token;
    },
  },
});
