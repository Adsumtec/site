import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Adsumtec - Soluções para o seu negócio com uso inteligente de dados",
  description: "Obtenha resultados concretos através de uma abordagem assertiva de resolução de problemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${urbanist.variable} font-urbanist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
