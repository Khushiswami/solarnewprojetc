import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Head from "next/head";

// ✅ Import Poppins font
const poppins = Poppins({
  variable: "--font-poppins", // custom CSS variable name
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // adjust weights as needed
});

export const metadata: Metadata = {
  title: "GAYATRI SOLAR",
  description:
    "Gayatri Solar is one of India’s leading commercial solar installation company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
