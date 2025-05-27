import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import {imageOptimizer} from "next/dist/server/image-optimizer";
const inter = Inter({ subsets: ["latin"] });
import {DesktopNav} from "@/app/Components/Navbar";

export const metadata: Metadata = {
  title: "mateja milicevic",
  description: "hi",
  icons: {
    icon: []
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}

      </body>
    </html>
  );
}
