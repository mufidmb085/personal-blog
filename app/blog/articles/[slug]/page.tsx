import ArticleRenderer from "@/components/blog/articles/ArticleRenderer";
import {getArticleBySlug} from "@/libs/article";

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
	const { slug } = await params

	return (
		<div className={"static flex flex-col items-center w-full min-h-screen py-24 px-8 sm:px-0"}>
			<ArticleRenderer article={await getArticleBySlug(slug)}  />
		</div>
	);
}