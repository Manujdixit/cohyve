import type React from "react";
import "./globals.css";
import localFont from "next/font/local";

const fontone = localFont({
  src: [
    {
      path: "../public/fonts/CodeNext-Trial-Regular.ttf",
    },
  ],
  variable: "--font-one",
});

const fonttwo = localFont({
  src: [
    {
      path: "../public/fonts/Gwen-Trial-Regular.otf",
    },
  ],
  variable: "--font-two",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontone.className} ${fonttwo.variable}`}>
      <body className="font-one">{children}</body>
    </html>
  );
}
