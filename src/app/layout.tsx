import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav";
import "@/styles/globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THS CCC',
  description: 'THS Computer Coding Club - Get ready for our best year yet. Join us for 2024-2025!',
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: 'THS CCC - Join us for 2024-2025!',
    description: 'THS Computer Coding Club - Get ready for our best year yet.',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'THS CCC Open Graph Image',
      },
    ],
  },
}

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(fontHeading.variable, fontBody.variable)}>
      <body className="flex min-h-screen flex-col antialiased">
        <main className="flex-grow">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
