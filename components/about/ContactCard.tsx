import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import {Link} from "@heroui/link";
import {FacebookIcon, GithubIcon, TwitterIcon} from "@/components/ui/Icons";

export default function ContactCard() {
	return (
		<Card disableRipple={true} disableAnimation={true} radius={"sm"} shadow={"sm"} allowTextSelectionOnPress={false} className="bg-content1 max-w-md p-6">
			<CardHeader className={"flex flex-col justify-center"}>
				<h1 className="text-3xl text-primary font-bold uppercase tracking-wide">Get in Touch</h1>
			</CardHeader>
			<CardBody className={"flex flex-col justify-center"}>
				<p className={"text-md font-normal text-content1-foreground text-center"}>If you want to say hello, discuss, or give feedback, just message me below</p>
			</CardBody>
			<CardFooter className={"flex flex-row items-center justify-center gap-4"}>
				<Link aria-label={"Github"} href="https://github.com/mufidmb085" isExternal={true} color={"foreground"}>
					<GithubIcon size={36} />
				</Link>
				<Link aria-label={"Twitter"} href="https://twitter.com/mufidmb48" isExternal={true} color={"foreground"}>
					<TwitterIcon size={36} />
				</Link>
				<Link aria-label={"Facebook"} href="https://facebook.com/mufidmb48" isExternal={true} color={"foreground"}>
					<FacebookIcon size={36} />
				</Link>
			</CardFooter>
		</Card>
	);
}