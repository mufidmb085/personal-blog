import {Link} from "@heroui/link";
import {FacebookIcon, GithubIcon, TwitterIcon} from "@/components/ui/Icons";

const Contact = () => {
	return (
		<div className={"flex flex-col w-full items-center justify-center p-4 gap-4"}>
			<h1 className={"text-2xl font-bold text-primary"}>Get in Touch</h1>
			<p className={"text-md font-normal text-content1-foreground"}>If you want to say hello, discuss, or give feedback, just message me below</p>
			<div className={"flex flex-row items-center justify-center gap-4"}>
				<Link aria-label={"Github"} href="https://github.com/mufidmb085" isExternal={true} color={"foreground"}>
					<GithubIcon size={42} />
				</Link>
				<Link aria-label={"Twitter"} href="https://twitter.com/mufidmb48" isExternal={true} color={"foreground"}>
					<TwitterIcon size={42} />
				</Link>
				<Link aria-label={"Facebook"} href="https://facebook.com/mufidmb48" isExternal={true} color={"foreground"}>
					<FacebookIcon size={42} />
				</Link>
			</div>
		</div>
	)
}

export default Contact;