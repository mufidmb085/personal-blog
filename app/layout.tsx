import type { Metadata } from "next";
import "@/styles/globals.css";
import {siteConfig} from "@/config/site";
import {clsx} from "clsx";
import {newsreader, plusJakartaSans} from "@/config/fonts";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html data-theme={"light"} lang={"en"} suppressHydrationWarning={true} className={`${plusJakartaSans.variable} ${newsreader.variable}`}>
            <head />
            <body className={"antialiased bg-base-100"}>
                <main className={"relative"}>
                    <Navbar className={"fixed inset-x-0 top-0 z-50 px-8 sm:px-16"} />
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
