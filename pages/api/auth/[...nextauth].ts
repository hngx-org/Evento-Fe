import { NextApiHandler } from 'next';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { loginWithGoogle } from '@/http/authapi';
import { toast } from 'react-toastify';

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

    async loginUserWithGoogle(user: { name: any; email: any; imageUrl: any; id: any }) {
      try {
        await loginWithGoogle({
          name: user.name,
          email: user.email,
          imageUrl: user.imageUrl,
          id: user.id,
        });
        toast.success('Login with Google successful!');
      } catch (error) {
        console.error('Error during Google login:', error);
        toast.error('An error occurred during Google login. Please try again later.');
      }
    },

    async session({ session, token }: { session: any; token: any }) {
      session.id_token = token.id_token;
      return session;
    },
  },
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default handler;
