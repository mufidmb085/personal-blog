"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import {siteConfig} from "@/config/site";
import {Logo} from "@/components/ui/Icons";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch";
import {Link} from "@heroui/link";
import {Button} from "@heroui/button";
import {usePathname} from "next/navigation";

const NavigationBar = () => {

    const pathname = usePathname();

    return (
        <Navbar maxWidth={"xl"}>
            <NavbarContent justify={"start"}>
                <div className="flex flex-row items-center justify-start gap-4">
                    <NavbarBrand>
                        <Link href="/">
                            <Logo />
                        </Link>
                     </NavbarBrand>
                     <div className={"flex flex-row justify-center items-center"}>
                        <div className={"flex flex-row"}>
                              <ul className="hidden lg:flex gap-2 justify-start">
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
                    <ThemeSwitch />
            </NavbarContent>
        </Navbar>
    )
}

export default NavigationBar;