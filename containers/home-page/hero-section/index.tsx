import {getTimeGreeting} from "@/utils/Utils";

const HeroSection = () => {

	const greeting = getTimeGreeting();

	return (
		<section className="relative flex flex-col w-full items-center justify-center aspect-[21/9]">
			<div className="relative z-10 self-start p-8 lg:p-16 pb-64">
				<div className={"flex flex-col items-start justify-center gap-4 max-w-md"}>
					<h1 className="text-4xl font-black text-shadow-lg uppercase text-primary">Hi, {greeting}</h1>
					<p className="text-lg font-light text-foreground">I document my thoughts, ideas, and things I build, mostly as a way to think clearer. But you&#39;re welcome to read along.</p>
				</div>
			</div>
		</section>
	)
}

export default HeroSection;