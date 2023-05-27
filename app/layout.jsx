import "./globals.css";
import Header from "@/Components/Header";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB rating application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <Search />
          {children}
        </Providers>
      </body>
    </html>
  );
}
