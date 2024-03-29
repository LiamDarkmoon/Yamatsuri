import "./globals.css";
import { roboto } from './ui/font'
import HeaderNavbar from './ui/Header-Navbar'
import FooterNav from './ui/FooterNav'
import EventCalendar from './ui/EventCalendar'
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Yamatsuri",
  description: "Anime, K-pop, Japanese culture event",
};

export default function RootLayout({ 
    children,
  } : {
    children: React.ReactNode; 
  }) {

  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${roboto.className} antialiased`}>
          <HeaderNavbar/>
          <EventCalendar />
          { children }
          <FooterNav/>
        </body>
      </SessionProvider>
    </html>
  );
}
