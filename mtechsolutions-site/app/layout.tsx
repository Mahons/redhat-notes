import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "MTechSolutions | Enterprise Architecture Consulting",
  description: "Expert enterprise architecture consulting, application modernisation, and technical leadership for government and enterprise organisations.",
  keywords: ["enterprise architecture", "software architecture", "application modernisation", "API strategy", "technical consulting", "Ireland"],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
