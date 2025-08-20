import "./globals.css";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Anko Studios | Professional Photography & Videography",
  description: "Premium photography & cinematic videography. Weddings, portraits, corporate.",
  metadataBase: new URL("https://www.ankostudios.com"), // change later
  openGraph: { title: "Anko Studios", images: ["/og.jpg"] },
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}