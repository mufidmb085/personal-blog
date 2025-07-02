import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import {siteConfig} from "@/config/site";
import {Logo} from "@/components/ui/Icons";
import NextLink from "next/link";
import clsx from "clsx";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch";
import {link} from "@heroui/theme";
import {Link} from "@heroui/link";

const NavigationBar = () => {
  return (
      <Navbar maxWidth={"xl"}>
          <NavbarContent justify={"start"}>
              <div className="flex flex-row items-center justify-start">
                  <NavbarBrand>
                      <Link href="/">
                          <Logo />
                      </Link>
                  </NavbarBrand>
                  <div className={"flex flex-row justify-center items-center gap-4"}>
                      <div className={"flex flex-row"}>
                          <ul className="hidden lg:flex gap-4 justify-start ml-2">
                              {siteConfig.navItems.map((item) => (
                                  <NavbarItem key={item.href}>
                                      <NextLink className={clsx(link({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium",)} color="foreground" href={item.href}>
                                          {item.label}
                                      </NextLink>
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