import {clsx} from "clsx";
import {getAllArticlesMetadata} from "@/libs/article";
import React from "react";
import LatestArticleWidget from "@/components/blog/LatestArticleWidget";
import {ArticleMetadata} from "@/interfaces/article.model";
import {sortArticleMetadataByDate} from "@/utils/article-utils";

interface LatestArticleWidgetSectionProps {
	className?: string;
	id?: string;
}

const LatestArticleWidgetSection: React.FC<LatestArticleWidgetSectionProps> = async ({ className, id }) => {

	const allArticleMetadata: ArticleMetadata[] = await getAllArticlesMetadata()

	return (
		<section className={clsx(className, id)}>
			<LatestArticleWidget articlesMetadata={sortArticleMetadataByDate(allArticleMetadata)} maxShownArticles={3} />
		</section>
	)
}

export default LatestArticleWidgetSection;