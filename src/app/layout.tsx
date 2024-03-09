import type { Metadata } from "next";
import cn from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@/lib/ReactQueryProvider";
import Header from "./_components/Header";

import Footer from "./_components/Footer";
import TopButton from "./_components/TopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holo Wiki",
  description: "Our favorite VTubers",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: Props) {
  return (
    <html lang="ko">
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <ReactQueryProvider>
          <div className="flex flex-grow flex-col">
            <Header />
            <main className="mx-4 flex-grow">{props.children}</main>
            <Footer />
            <TopButton />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
