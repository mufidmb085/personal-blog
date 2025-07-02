import LatestArticlesSection from "@/containers/home-page/latest-articles-section";
import HeroSection from "@/containers/home-page/hero-section";

export default async function Home() {

    return (
        <section className="flex flex-col w-full items-center justify-center gap-16">
            <HeroSection />
            <LatestArticlesSection />
        </section>
    );
}
