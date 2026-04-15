import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  title: "Gaurav Patharey Architects",
  description: "Architectural portfolio for Gaurav Patharey Architects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
