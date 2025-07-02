import { getArticleBySlug } from "@/libs/articles";
import ArticleRenderer from "@/components/blog/articles/ArticleRenderer";

// @ts-ignore
export default async function Page({ params }) {
	const { slug } = await params;
	const { content, metadata } = await getArticleBySlug(slug);

	return (
		<div className="max-w-3xl">
			<ArticleRenderer source={content} metadata={metadata} />
		</div>
	);
}
