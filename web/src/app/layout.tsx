import { ReactNode } from "react"; 
import "./globals.css";
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto' });
const baijamjuree = Baijamjuree({ subsets: ["latin"], weight: "700", variable: '--font-baijamjuree'});

export const metadata = {
  title: "Memorias",
  description: "Uma cápsula do tempo construida com React, Next.js, Tailwindcss e Typescript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  );
}
