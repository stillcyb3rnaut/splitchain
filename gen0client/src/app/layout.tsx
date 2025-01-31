import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 import { headers } from 'next/headers' // added
import ContextProvider from '@/context';
import { AppProvider,   } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "desplit",
  description: "Split and settle onchain",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersObj = await headers();
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           {/* <ContextProvider cookies={cookies}>{children}</ContextProvider> */}
               
           <ContextProvider cookies={cookies}>
           <AppProvider>

            {children}
            
            </AppProvider>
            
            </ContextProvider>

      </body>
    </html>
  );
}
