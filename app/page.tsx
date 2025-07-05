import LatestArticlesSection from "@/containers/home-page/latest-articles-section";
import HeroSection from "@/containers/home-page/hero-section";

export default async function Home() {

    return (
        <div className={"lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-8 w-full max-w-screen-xl p-8 auto-rows-min"}>
            <HeroSection />
            <LatestArticlesSection className={"row-span-3 lg:row-start-1 lg:col-start-2"} />
        </div>
    );
}
