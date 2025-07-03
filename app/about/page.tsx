import AboutMeSection from "@/containers/about-page/about-me-section";
import ContactSection from "@/containers/about-page/contact-section";

export default function About() {

	return (
		<div className="flex flex-col w-full gap-16 items-center justify-center">
			<AboutMeSection />
			<ContactSection />
		</div>
	);
}
