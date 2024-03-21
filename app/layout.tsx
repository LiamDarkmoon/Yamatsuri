import "./globals.css";
import { roboto } from './ui/font'
import HeaderNavbar from './ui/Header-Navbar'
import FooterNav from './ui/FooterNav'
import EventCalendar from './ui/EventCalendar'

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
      <body className={roboto.className + " bg-purple-tones-100"}>
        <HeaderNavbar/>
        <EventCalendar />
        { children }
        <FooterNav/>
        </body>
    </html>
  );
}
