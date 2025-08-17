import HeroSection from "@/containers/home-page/hero-section";
import LatestArticleWidgetSection from "@/containers/home-page/latest-article-widget-section";

export default function Home() {
    return (
        <div className={"flex flex-col min-h-screen"} id={"home-page"}>
            <div className={"prose prose-sm sm:prose-base md:prose-lg w-full max-w-screen grow"}>
                <HeroSection className={"not-prose px-8 sm:px-16"} id={"hero-section"} />
                <LatestArticleWidgetSection className={"px-8 sm:px-16"} id={"latest-article-widget-section"} />
            </div>
        </div>
    );
}
