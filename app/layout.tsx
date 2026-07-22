import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Bryce Carr – Software Engineer";
const description = "GitHub and LinkedIn for Bryce Carr.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hyperhtml.net"),
  title,
  description,
  alternates: {
    canonical: "https://hyperhtml.net",
  },
  openGraph: {
    title,
    description,
    url: "https://hyperhtml.net",
    siteName: "Bryce Carr",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryce Carr",
  jobTitle: "Software Engineer",
  url: "https://hyperhtml.net",
  sameAs: [
    "https://github.com/hyperhtml",
    "https://www.linkedin.com/in/brycecarr/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
