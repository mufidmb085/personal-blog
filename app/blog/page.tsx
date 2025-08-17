import LatestArticleSection from "@/containers/blog-page/latest-article-section";

export default function Blog() {
	return (
		<div className={"flex flex-col min-h-screen pt-32 pb-8"} id={"blog-page"}>
			<div className={"prose prose-sm sm:prose-base w-full max-w-screen grow"}>
				<LatestArticleSection className={"px-8 sm:px-16"} id={"latest-article-section"} />
			</div>
		</div>
	);
}