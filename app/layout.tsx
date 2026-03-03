import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "Chris Fitzgerald | Portfolio",
    description: "Software engineer portfolio of Chris Fitzgerald.",
    icons: {
        icon: "/favicon.png",
    },
};

// layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <body className="font-sans">
        {children}
        </body>
        </html>
    );
}