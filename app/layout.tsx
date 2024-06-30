import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProviders, StoreProvider } from './providers'
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mockit",
  description: "An app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-hidden">
        <body className={inter.className}>
        <StoreProvider>
          <NextUIProviders>
              <Header />
              {children}
            </NextUIProviders>
          </StoreProvider>
        </body>
    </html>
  );
}
