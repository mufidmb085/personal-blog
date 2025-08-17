import React from "react";
import {clsx} from "clsx";
import {siteConfig} from "@/config/site";
import Link from "next/link";
import {Logo} from "@/components/ui/Icons";

interface FooterProps {
	className?: string
}

const Footer:React.FC<FooterProps> = ({className}) => {
	return (
		<footer className={clsx("footer footer-horizontal footer-center bg-primary text-primary-content gap-6 p-8 sm:p-16", className)}>
			<aside>
				<Logo size={48} />
				<div className="flex flex-col pt-2">
					<p className={"font-medium"}>
						Mufid Muhammad Baihaqi
					</p>
					<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
				</div>
			</aside>
			<nav>
				<div className={"grid grid-flow-col gap-4"}>
					{siteConfig.navFooterItems.map((navItem) => {
						const Icon = navItem.icon
						return (
							<Link href={navItem.href} key={navItem.label} rel="noopener noreferrer" target="_blank">
								<Icon size={24} />
							</Link>
						)
					})}
				</div>
			</nav>
		</footer>
	)
}

export default Footer