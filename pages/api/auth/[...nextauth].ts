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
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default handler;
