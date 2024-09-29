import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.VITE_AUTH_GOOGLE_ID,
      clientSecret: process.env.VITE_AUTH_GOOGLE_SECRET,
    }),
  ],
};

export const {
  auth,
  handlers: { GRT, POST },
} = NextAuth(authConfig);
