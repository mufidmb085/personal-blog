import AboutMeSection from "@/containers/about-page/about-me-section";

export default function About() {
	return (
		<div className={"flex flex-col min-h-screen pt-32 pb-8"} id={"about-page"}>
			<div className={"prose prose-sm sm:prose-base w-full max-w-screen grow"}>
				<AboutMeSection className={"flex flex-col items-center px-8 sm:px-16"} />
			</div>
		</div>
	)
}