import {FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon} from "@/components/ui/Icons";
import {FileTextIcon, HouseIcon, UserIcon} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "MXT",
	description: "Personal blog",
	navMenuItems: [
		{icon: HouseIcon,label: "Home", href: "/", id: "#home-page"},
		{icon: FileTextIcon,label: "Blog", href: "/blog", id: "#blog-page"},
		{icon: UserIcon, label: "About", href: "/about", id: "#about-page"},
	],
	navFooterItems: [
		{icon: TwitterIcon, label: "Twitter", href: "https://twitter.com/mufidmb48"},
		{icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/mufidmb48"},
		{icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/mufidmb38"},
		{icon: GithubIcon, label: "Github", href: "https://github.com/mufidmb085"},
	],
	homePageSectionIds: [
		{id: "hero-section", href: "#hero-section"},
		{id: "latest-article-widget-section", href: "#latest-article-widget-section"},
	],
};