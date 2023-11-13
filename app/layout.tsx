import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { vazirMatn } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-theme="light" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen antialiased",
          vazirMatn.variable,
          vazirMatn.className
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow w-100">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
