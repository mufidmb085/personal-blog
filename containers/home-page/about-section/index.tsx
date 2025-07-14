import clsx from "clsx";
import AboutCard from "@/components/about/AboutCard";
import {about} from "@/data/about";

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