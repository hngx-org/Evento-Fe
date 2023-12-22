import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { NextAuthOptions } from 'next-auth';
import axios from 'axios';

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '30595985933-1bse48dr61tao5v3dgkl7argdr8i2deo.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  callbacks: {
      async signIn({user,account,profile}:{user: any,account: any, profile?: any}) {
          const request = await axios.post("https://evento-qo6d.onrender.com/api/v1/login/google",{email: profile.email,picture: profile.picture, name: profile.name})
          const response = await request.data
          if (request.data) { // this condition is just to check if the request really went through and if it does, you are free to use any condition of your choice
            return true // user is logged in by returning true
          } return false // else user is not allowed to log in
    },
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
     
      if (account) {

      }
      return { user, token };
    },


    async session({ session, token }: { session: any; token: any }) {
      session.id_token = token.id_token;
      return session;
    },
  },
};

// NOTE: Your env variables should be set as below not the way you previously set it
// NEXTAUTH_URL
NEXTAUTH_SECRET: 'evento';

const handler: NextApiHandler =  NextAuth(options);

export default handler