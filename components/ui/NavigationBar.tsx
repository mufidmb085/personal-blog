"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/navbar";
import {siteConfig} from "@/config/site";
import {Logo} from "@/components/ui/Icons";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch";
import {Link} from "@heroui/link";
import {usePathname} from "next/navigation";
import React from "react";

const NavigationBar = () => {

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function isPathnameSame(href: string): boolean {
        return pathname === href || pathname.startsWith(`${href}/`)
    }

    return (
        <Navbar maxWidth={"xl"} isMenuOpen={isMenuOpen} shouldHideOnScroll={true} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent justify={"start"}>
                <div className="flex flex-row items-center justify-start gap-4">
                    <NavbarBrand>
                        <Link href="/">
                            <Logo size={48} />
                        </Link>
                     </NavbarBrand>
                    <ul className="hidden lg:flex gap-4 justify-start">
                        {siteConfig.navItems.map((item) => (
                            <NavbarItem key={item.href}>
                                <Link color={isPathnameSame(item.href) ? "primary" : "foreground"} href={item.href}>{item.label}</Link>
                            </NavbarItem>
                        ))}
                    </ul>
                 </div>
             </NavbarContent>
             <NavbarContent justify={"end"}>
                 <div className="flex flex-row items-center justify-start gap-4">
                     <ThemeSwitch />
                     <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden" />
                 </div>
            </NavbarContent>

            <NavbarMenu>
                {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)} key={`${item}-${index}`}>
                        <Link color={isPathnameSame(item.href) ? "primary" : "foreground"} href={item.href} onPress={() => {setIsMenuOpen(false)}}>{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    )
}

export default NavigationBar;