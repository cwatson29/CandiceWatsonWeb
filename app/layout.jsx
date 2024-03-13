import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Candice Watson",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
