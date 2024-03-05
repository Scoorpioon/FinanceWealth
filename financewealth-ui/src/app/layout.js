import { Inter } from "next/font/google";
import "./styles/globals.css";
import styled, { css } from 'styled-components';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Wealth",
  description: "App desenvolvido em Next.js, Springboot Web, SQL Server, TailwindCSS & Styled Components"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">{children}</body>
    </html>
  );
}