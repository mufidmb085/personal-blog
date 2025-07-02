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
import {Button} from "@heroui/button";
import {usePathname} from "next/navigation";
import React from "react";

const NavigationBar = () => {

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar maxWidth={"xl"} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent justify={"start"}>
                <div className="flex flex-row items-center justify-start gap-4">
                    <NavbarBrand>
                        <Link href="/">
                            <Logo />
                        </Link>
                     </NavbarBrand>
                     <div className={"flex flex-row justify-center items-center"}>
                        <div className={"flex flex-row"}>
                              <ul className="hidden md:flex gap-2 justify-start">
                                  {siteConfig.navItems.map((item) => (
                                   <NavbarItem key={item.href}>
                                         <Button as={Link} variant={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "flat" : "light"} color={"primary"} href={item.href} className={"text-md"}>{item.label}</Button>
                                     </NavbarItem>
                                 ))}
                            </ul>
                        </div>
                    </div>
                 </div>
             </NavbarContent>
             <NavbarContent justify={"end"}>
                 <div className="flex flex-row items-center justify-start gap-4">
                     <ThemeSwitch />
                     <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                 </div>
            </NavbarContent>

            <NavbarMenu>
                {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)} key={`${item}-${index}`}>
                        <Button as={Link} variant={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "flat" : "light"} color={"primary"} size={"lg"} href={item.href} fullWidth={true} className={"text-md flex-row justify-start p-4 m-0"} onPress={() => setIsMenuOpen(false)}>{item.label}</Button>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    )
}

export default NavigationBar;