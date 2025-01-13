import type { Metadata } from "next";
import { Poppins, Koh_Santepheap } from "next/font/google";
import "./globals.css";

const getPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

const getKoh = Koh_Santepheap({
  weight: "400"
})

export const metadata: Metadata = {
  title: "FoodJP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${getPoppins} ${getKoh} antialiased`}>
        {children}
      </body>
    </html>
  );
}
