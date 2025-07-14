import LatestArticlesSection from "@/containers/home-page/latest-articles-section";
import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";
import ContactSection from "@/containers/home-page/contact-section";

export default async function Home() {

    return (
        <div className={"flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:justify-items-center gap-8 w-full max-w-screen-xl p-8"}>
            <HeroSection className={"self-start lg:justify-self-start"} />
            <LatestArticlesSection className={"lg:col-span-1 lg:row-span-3"} />
            <div className={"flex flex-col gap-8 lg:row-span-2"}>
                <AboutSection />
                <ContactSection />
            </div>
        </div>
    );
}
