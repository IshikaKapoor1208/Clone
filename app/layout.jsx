import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-body"
});

const headingFont = localFont({
  src: "../assets/fonts/Thesignature-Regular.otf",
  display: "swap",
  variable: "--font-heading"
});

export const metadata = {
  title: "Gaurav Patharey Architects",
  description: "Architectural portfolio for Gaurav Patharey Architects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${headingFont.variable} font-body overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
