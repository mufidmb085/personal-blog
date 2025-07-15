import clsx from "clsx";
import {about} from "@/data/about";
import AboutCard from "@/components/about/AboutCard";

interface AboutSectionProps {
	className?: string;
}

const AboutSection = ({className}: AboutSectionProps) => {
	return (
		<section className={clsx(className)}>
			<AboutCard name={about.name} description={about.description} image={about.image} />
		</section>
	)
}

export default AboutSection;