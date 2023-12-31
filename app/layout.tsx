import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site-config";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";
import Favicon from "/public/favicon.ico";
import { Toaster } from "@/components/ui/toaster";

const sfPRO = localFont({
  src: [
    {
      path: "./fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export const metadata: Metadata = {
  title: "Shlok Mehta",
  description: siteConfig.bio,
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={sfPRO.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <div className="flex flex-col h-full">{children}</div>
            <Toaster />

            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
