import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "Aurora Projects",
  description: "Professional project showcase inspired by GLH."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="app-body">{children}</body>
    </html>
  );
}
