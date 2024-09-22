import type { Metadata } from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";


const font = Space_Grotesk({ subsets: ["latin"]});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "admechanics",
  description: "Grow your business with admechanics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={font.className}>{children}</body>
      
      
      {/* //   className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // >
      //   {children} */}
      
    </html>
  );
}
