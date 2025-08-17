import {clsx} from "clsx";
import Hero from "@/components/home/Hero";
import {id} from "postcss-selector-parser";

interface HeroSectionProps {
	className?: string;
	id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className, id}) => {
	return (
		<section className={clsx(className, id)}>
			<Hero headline={"From Thought to Screen"} subheadline={"I document my thoughts, ideas, and things I build. Mostly as a way to think clearer."} />
		</section>
	)
}

export default HeroSection;