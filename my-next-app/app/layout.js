import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footers";

export const metadata = {
  title: "Clothify",
  description: "Modern Clothing E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
