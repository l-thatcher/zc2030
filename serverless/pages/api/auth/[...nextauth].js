import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import dotenv from 'dotenv';
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"

dotenv.config();

// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
const prisma = new PrismaClient()

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0"
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma)
  // (sequelize, {
  //   models: {
  //     User: sequelize.define("user", {
  //       ...models.User,
  //       ethAddress: DataTypes.STRING,
  //       id: {type: DataTypes.STRING(1054), primaryKey:true}})
  //   }
  // }),
})






