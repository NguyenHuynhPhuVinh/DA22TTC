import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

const stagewiseConfig = {
  plugins: []
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DA22TTC",
  description: "Website chia sẽ tài liệu dành cho lớp DA22TTC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Your existing content */}
        {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && (
          <StagewiseToolbar config={stagewiseConfig} />
        )}
        {children}
      </body>
    </html>
  );
}
