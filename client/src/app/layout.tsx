import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboadWrapper from "./DashboardWrapper";

const inter = localFont({
  src: "./fonts/Inter-Regular.woff",
  variable: "--font-inter",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Project Management App",
  description: "An Apps for Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <DashboadWrapper>{children}</DashboadWrapper>
      </body>
    </html>
  );
}
