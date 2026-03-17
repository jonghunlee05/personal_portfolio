import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonghun Lee | Portfolio",
  description:
    "Materials Science & Engineering student building at the intersection of materials, AI, simulation, and robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
