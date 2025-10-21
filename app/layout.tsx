import "./globals.css";
import { Inter } from "next/font/google";
import ShowcaseButton from "./components/ShowcaseButton";

export const metadata = {
  title: "Anko Studios | Professional Photography & Videography",
  description: "Premium photography & cinematic videography. Weddings, portraits, corporate.",
  metadataBase: new URL("https://www.ankostudios.co.uk"), // change later
  openGraph: { title: "Anko Studios", images: ["/og.jpg"] },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Preload hero images for faster slideshow */}
        <link rel="preload" href="/images/hero1.jpg" as="image" />
        <link rel="preload" href="/images/hero2.jpg" as="image" />
        <link rel="preload" href="/images/hero3.jpg" as="image" />

        {/* ✅ Favicon & PWA Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className={inter.className}>
        {children}
        {/* ✅ Floating slideshow button */}
        <ShowcaseButton />
      </body>
    </html>
  );
}
