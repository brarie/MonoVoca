import type { Metadata } from 'next';
import { Noto_Sans_KR, Exo_2 } from 'next/font/google';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const exo2 = Exo_2({
  variable: '--font-exo-2',
  subsets: ['latin'],
  weight: ['900'],
  style: ['italic'],
});

export const metadata: Metadata = {
  title: 'MonoVoca',
  description: 'Memorize Words Efficiently',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${notoSansKR.variable} ${exo2.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
