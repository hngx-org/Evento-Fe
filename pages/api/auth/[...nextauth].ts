import { NextApiHandler } from 'next';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
    async jwt({ token, user, account }: { token: any; user: any; account: any }) {
      if (account) {
        console.log('user', user);
      }
      return { user, token };
    },

    async session({ session, token }: { session: any; token: any }) {
      session.id_token = token.id_token;
      return session;
    },
  },
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default handler;
