import React from "react";
import {LucideProps, UserCircleIcon} from "lucide-react";
import {siteConfig} from "@/config/site";
import Link from "next/link";

interface AuthorSocialLink {
	socialName: string;
	socialIcon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
	href: string;
}

interface AuthorProfileProps {
	authorName: string;
	authorDescription: string;
	authorAvatar?: string;
	authorEmail?: string;
	authorSocialsLink?: AuthorSocialLink[];
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({authorName, authorDescription, authorAvatar, authorEmail, authorSocialsLink}) => {
	return (
		<div className={"flex flex-col items-center max-w-md"}>
			<h1 className={"font-medium"}>About Me</h1>
			<h2>Hello, I am {authorName}</h2>
			<div className="w-full h-auto aspect-[16/9]">
				<div className={"flex w-full h-full bg-primary text-primary-content items-center justify-center"}>
					<span className={"text-4xl font-bold"}>{authorAvatar}</span>
				</div>
			</div>
			<p>{authorDescription}</p>
			<div className={"card card-md not-prose"}>
				<div className={"card-body items-center text-center"}>
					<h3 className={"card-title"}>Get in Touch</h3>
					<div className={"card-actions"}>
						{authorSocialsLink.map((items) => {
							const Icon = items.icon
							return (
								<Link href={items.href} key={items.label} rel="noopener noreferrer" target="_blank">
									<Icon size={24} />
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthorProfile;