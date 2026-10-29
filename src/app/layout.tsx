import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Beyond The Code | Fullstack & Distributed Systems Engineer',
  description:
    'Interactive personal portfolio showcasing resilient distributed backend architectures and cinematic WebGL interfaces.',
  keywords: [
    'Fullstack Engineer',
    'Distributed Systems',
    'Backend Architect',
    'Go',
    'Rust',
    'Three.js',
    'Next.js',
  ],
  authors: [{ name: 'Beyond The Code' }],
  metadataBase: new URL('https://beyond-the-code.local'),
  openGraph: {
    title: 'Beyond The Code | Fullstack & Distributed Systems Engineer',
    description:
      'Interactive personal portfolio showcasing resilient distributed backend architectures and cinematic WebGL interfaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Beyond The Code',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond The Code | Fullstack & Distributed Systems Engineer',
    description:
      'Interactive personal portfolio showcasing resilient distributed backend architectures and cinematic WebGL interfaces.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void text-editorial-primary font-sans antialiased selection:bg-accent-violet/30 selection:text-editorial-primary min-h-screen relative flex flex-col">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1 relative z-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

