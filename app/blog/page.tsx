import LatestArticleContainer from "@/containers/blog-page/latest-article-container";

export default function Blog() {

	return (
		<section className="flex flex-col w-full items-center justify-center gap-16 p-8">
			<LatestArticleContainer />
		</section>
	);
}
