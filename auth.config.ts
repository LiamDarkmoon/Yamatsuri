import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
        if (isLoggedIn) return true;
        return false; 
    },
  },
  providers: [], 
} satisfies NextAuthConfig;
