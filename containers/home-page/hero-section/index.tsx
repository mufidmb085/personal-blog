import clsx from "clsx";
import {fontPlayfairDisplaySC} from "@/config/fonts";

interface HeroSectionProps {
	className?: string;
}

const HeroSection = ({className}: HeroSectionProps) => {

	return (
		<section className={clsx(className)}>
			<div className={"flex flex-col gap-4 max-w-lg items-start justify-center"}>
				<h1 className={clsx("text-6xl text-primary font-bold uppercase tracking-tight drop-shadow-md", fontPlayfairDisplaySC.className)}>From Thought<br/>to Screen</h1>
				<h2 className={"text-lg text-foreground font-light"}>I document my thoughts, ideas, and things I build.<br />Mostly as a way to think clearer, but you&#39;re welcome to read along.</h2>
			</div>
		</section>
	)
}

export default HeroSection;