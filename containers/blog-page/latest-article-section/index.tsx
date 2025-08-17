import {clsx} from "clsx";
import {getAllArticlesMetadata} from "@/libs/article";
import React from "react";
import {ArticleMetadata} from "@/interfaces/article.model";
import LatestArticleGridList from "@/components/blog/LatestArticleGridList";
import {sortArticleMetadataByDate} from "@/utils/article-utils";

interface LatestArticleSectionProps {
	className?: string;
	id?: string;
}

const LatestArticleSection: React.FC<LatestArticleSectionProps> = async ({ className, id }) => {

	const allArticleMetadata: ArticleMetadata[] = await getAllArticlesMetadata()

	return (
		<section className={clsx(className, id)}>
			<LatestArticleGridList articlesMetadata={sortArticleMetadataByDate(allArticleMetadata)} maxShownArticlesPerPage={9} />
		</section>
	)
}

export default LatestArticleSection;