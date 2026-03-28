import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Tour Profesional | jasawebtour.com',
  description: 'Jasa pembuatan website tour & travel profesional, modern, dan SEO optimized untuk meningkatkan booking bisnis tour Anda.',
  keywords: 'jasa pembuatan website tour, website tour travel, buat web tour, jasawebtour',
  openGraph: {
    title: 'Jasa Pembuatan Website Tour Profesional | jasawebtour.com',
    description: 'Tingkatkan booking bisnis tour Anda dengan website profesional dan SEO optimized.',
    url: 'https://jasawebtour.com',
    siteName: 'JasaWebTour',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#020617] text-slate-200 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
