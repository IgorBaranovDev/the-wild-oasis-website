import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.VITE_PUBLIC_AUTH_GOOGLE_ID,
      clientSecret: process.env.VITE_PUBLIC_AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.VITE_NEXTAUTH_SECRET,
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
