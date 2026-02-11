import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris Fitzgerald | Portfolio",
  description: "Frontend engineer portfolio of Chris Fitzgerald.",
    icons: {
        icon: "/favicon.png",
    },
};



export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
      </html>
  );
}
