import {ArticleMetadata} from "@/interfaces/article.model";
import React from "react";
import ArticleCard from "@/components/blog/articles/ArticleCard";
import Link from "next/link";
import {ArrowRightIcon} from "lucide-react";

interface LatestArticleWidgetProps {
	articlesMetadata: ArticleMetadata[];
	maxShownArticles: number;
}

const LatestArticleWidget:React.FC<LatestArticleWidgetProps> = ({articlesMetadata, maxShownArticles}) => {
	return (
		<div className={"card"}>
			<div className={"card-body items-center gap-6"}>
				<h1 className={"text-primary"}>Latest Article</h1>
				<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center-safe gap-6 auto-rows-fr pt-4"}>
					{articlesMetadata.slice(0, maxShownArticles).map((metadata) => (
						<ArticleCard key={metadata.slug} title={metadata.title} excerpt={metadata.excerpt} date={metadata.date} author={metadata.author} slug={metadata.slug} />
					))}
				</div>
				<div className={"card-actions justify-center"}>
					<Link href={"/blog"} className={"btn btn-ghost btn-primary not-prose rounded-field"}>
						<span>Read more articles</span>
						<ArrowRightIcon className={"size-5"} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LatestArticleWidget;