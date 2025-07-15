import AboutSection from "@/containers/about-page/about-section";
import ContactSection from "@/containers/about-page/contact-section";

export default function About() {

	return (
		<div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:justify-items-centers lg:items-start gap-8 w-full max-w-screen-xl p-8">
			<AboutSection />
			<ContactSection />
		</div>
	);
}
