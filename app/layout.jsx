import "./globals.css";
import PageTransition from "../components/animations/PageTransition";
import MagneticCursor from "../components/MagneticCursor";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  title: "Gaurav Patharey Architects",
  description: "Architectural portfolio for Gaurav Patharey Architects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <PageTransition variant="grid" columnsCount={7} />
        <MagneticCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
