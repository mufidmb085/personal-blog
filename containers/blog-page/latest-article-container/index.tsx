import { getAllArticleMetadata } from "@/libs/articles";
import LatestArticleList from "@/components/blog/LatestArticleList";

export default function LatestArticleContainer() {
	const articles = getAllArticleMetadata();
	return <LatestArticleList articlesMetadata={articles} />;
}
