import LatestArticlesSection from "@/containers/home-page/latest-articles-section";
import HeroSection from "@/containers/home-page/hero-section";

export default async function Home() {

    return (
        <div className={"flex flex-col justify-center lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-8 w-full max-w-screen-xl p-8"}>
            <HeroSection className={"lg:col-span-1 self-start"} />
            <LatestArticlesSection className={"lg:col-span-1 lg:row-span-3 self-center"} />
            <p className={"lg:col-span-1"}>About Me</p>
        </div>
    );
}
