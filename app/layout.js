import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Folarin Obajenihi",
  description:
    "Folarin Obajenihi is a self-taught Frontend Developer and a Computer Science Undergrad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Favicon.jpg" /> {/* Corrected path */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
