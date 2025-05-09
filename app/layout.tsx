import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import Navbar from "@/components/navbar";

const playfairDisplayItalic = localFont({
  src: [
    {
      path: '../public/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-playfairDisplayItalic',
});

const roboto = localFont({
  src: [
    { path: '../public/fonts/Roboto/Roboto-Thin.ttf', weight: '100', style: 'normal' },
    { path: '../public/fonts/Roboto/Roboto-ThinItalic.ttf', weight: '100', style: 'italic' },

    { path: '../public/fonts/Roboto/Roboto-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Roboto/Roboto-LightItalic.ttf', weight: '300', style: 'italic' },

    { path: '../public/fonts/Roboto/Roboto-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Roboto/Roboto-Italic.ttf', weight: '400', style: 'italic' },

    { path: '../public/fonts/Roboto/Roboto-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Roboto/Roboto-MediumItalic.ttf', weight: '500', style: 'italic' },

    { path: '../public/fonts/Roboto/Roboto-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/Roboto/Roboto-BoldItalic.ttf', weight: '700', style: 'italic' },

    { path: '../public/fonts/Roboto/Roboto-Black.ttf', weight: '900', style: 'normal' },
    { path: '../public/fonts/Roboto/Roboto-BlackItalic.ttf', weight: '900', style: 'italic' },
  ],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "DARC",
  description: "DARC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplayItalic.variable} ${roboto.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
