import Contact from "@/components/about/Contact";

const AboutMeSection = () => {
	return (
		<section className={"flex flex-col items-center justify-center gap-8 p-8 py-16 m-8 lg:m-16 max-w-screen-xl bg-content1 rounded-xl drop-shadow-2xl"}>
			<Contact />
		</section>
	)
}

export default AboutMeSection;