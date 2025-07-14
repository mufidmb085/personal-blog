import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import NavigationBar from "@/components/ui/NavigationBar";
import {Link} from "@heroui/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="flex flex-col items-center justify-center w-full">
            <NavigationBar />
            <main className="flex items-center justify-center w-full min-h-screen">
              {children}
            </main>
            <footer className="w-full items-center justify-center">
              <div className={"flex flex-col items-center justify-center mx-8 md:mx-16 pb-8 pt-4 border-t border-default"}>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:justify-between gap-2">
                  <span className="text-sm text-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
                  <Link
                      isExternal
                      className="flex items-center gap-1 text-sm text-current"
                      href="https://heroui.com?utm_source=next-app-template"
                      title="heroui.com homepage"
                  >
                    <span className="text-foreground">Powered by</span>
                    <p className="text-primary font-semibold">HeroUI</p>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
