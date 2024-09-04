import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav";
import "@/styles/globals.css";

export const metadata = {
  title: "CCC",
  description: "Website for Everything Coding at Troy High",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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
