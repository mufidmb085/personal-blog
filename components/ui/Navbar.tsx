"use client";

import Link from "next/link";
import {siteConfig} from "@/config/site";
import React from "react";
import {clsx} from "clsx";
import {Logo} from "@/components/ui/Icons";
import {AlignRightIcon, XIcon} from "lucide-react";
import {usePathname} from "next/navigation";

interface NavbarProps {
    className?: string;
}

const Navbar:React.FC<NavbarProps> = ({className}) => {

	const [isMenuOpen, setMenuOpen] = React.useState(false);

	const pathname = usePathname();

	const isSamePath = (pathname: string) => pathname === pathname;

	const onMenuItemClick = () => {
		setMenuOpen(false)
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur()
		}
	}

	React.useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isMenuOpen]);

	return (
		<div className={clsx("min-h-[72px] collapse drop-shadow-sm bg-base-100/90 backdrop-blur-lg rounded-none", {"collapse-open": isMenuOpen, "bottom-0": isMenuOpen} ,className)}>
			<nav className={"navbar min-h-[72px]"}>
				<div className={"navbar-start"}>
					<Link href={"/"}>
						<Logo size={24} color={"var(--color-primary)"}  />
					</Link>
					<ul className={"hidden lg:menu lg:menu-horizontal lg:menu-md rounded-box"}>
						{siteConfig.navMenuItems.map((navMenuItem) => {
							const Icon = navMenuItem.icon;
							return (
								<li key={navMenuItem.label} className={"rounded-field"}>
									<Link href={isSamePath(navMenuItem.href) ? navMenuItem.href : navMenuItem.id} className={"text-base-content"}>
										<Icon className={"size-4"} />
										{navMenuItem.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={"navbar-end"}>
					<div onClick={(e) => {setMenuOpen(!isMenuOpen); e.stopPropagation}} className={clsx("btn btn-ghost btn-circle swap swap-rotate lg:hidden", {"swap-active": isMenuOpen})}>
						<AlignRightIcon className={"swap-off size-5"} />
						<XIcon className={"swap-on size-5"} />
					</div>
				</div>
			</nav>
			<div className={"flex flex-col z-40 collapse-content p-0 m-0"}>
				<ul className={"menu list lg:hidden w-full bg-base-300 rounded-box text-base-content"}>
					<li>
						<p className={"menu-title font-bold text-base-content"}>Navigation Menu</p>
						<ul>
							{siteConfig.navMenuItems.map((navMenuItem) => {
								const Icon = navMenuItem.icon;
								return (
									<Link key={navMenuItem.label} href={isSamePath(navMenuItem.href) ? navMenuItem.href : navMenuItem.id} onClick={() => onMenuItemClick()} className={"link link-neutral link-hover flex flex-row items-center gap-2 w-full py-1.5 px-2"}>
										<Icon className={"size-4"} />
										{navMenuItem.label}
									</Link>
								);
							})}
						</ul>
					</li>
				</ul>
			</div>

			<style jsx> {`
                .collapse:focus:not(.collapse-open) .collapse-content {
                    display: none !important;
                }`}
			</style>
		</div>
	)
}

export default Navbar;