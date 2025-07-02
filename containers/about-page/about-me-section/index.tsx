import AboutMe from "@/components/about/AboutMe";
import {aboutMe} from "@/data/about";

const AboutMeSection = () => {
	return (
		<section className={"flex flex-col items-center justify-center gap-8 max-w-screen-xl w-full p-8 xl:p-0"}>
			<AboutMe name={aboutMe.name} description={aboutMe.description} image={aboutMe.image} />
		</section>
	)
}

export default AboutMeSection;