import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname === '/auth/login';
      const isOnRegister = nextUrl.pathname === '/auth/register';
        if (isLoggedIn) {
          if(isOnLogin || isOnRegister){
            return Response.redirect(new URL('/', nextUrl));
          }
        } else if (isOnRegister){
          return Response.redirect(new URL('/auth/login', nextUrl));
        }
        return false; 
    },
  },
  providers: [], 
} satisfies NextAuthConfig;
