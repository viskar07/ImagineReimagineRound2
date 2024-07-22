import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Condensed, Gasoek_One } from 'next/font/google';

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable:'--ibm-plex-sans-condensed'
});

const gasoek = Gasoek_One({
  weight: '400',
  subsets: ['latin'],
  variable:'--gasoek-one'
});

export const metadata: Metadata = {
  title: "Bewakoof",
  description: "Stay update with fashion trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${ibmPlexSansCondensed.className} ${gasoek.variable} } `}>{children}</body>
    </html>
  );
}
