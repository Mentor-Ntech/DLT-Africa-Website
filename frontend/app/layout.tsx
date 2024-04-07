"use client";
// @ts-ignore
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// Layout component to wrap around content
export default function RootLayout({
  children,
  currentPath,
}: Readonly<{
  children: React.ReactNode;
  currentPath: string;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Provider store={store}>
          
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </Provider>
      </ThemeProvider>
    </html>
  );
}
