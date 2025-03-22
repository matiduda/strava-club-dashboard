import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Club Dashboard",
  description: "Dashboard for Strava clubs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
