"use client"

import React from "react";
import {ArticleMetadata} from "@/interfaces/article.model";
import ArticleCard from "@/components/blog/articles/ArticleCard";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {clsx} from "clsx";

interface LatestArticleGridListProps {
	articlesMetadata: ArticleMetadata[];
	maxShownArticlesPerPage: number;
}

const LatestArticleGridList:React.FC<LatestArticleGridListProps> =  ({articlesMetadata, maxShownArticlesPerPage = 9}) => {

	const [currentPage, setCurrentPage] = React.useState(1);
	const totalPages = Math.ceil(articlesMetadata.length / maxShownArticlesPerPage);

	const currentArticles = React.useMemo(() => {
		const start = (currentPage - 1) * maxShownArticlesPerPage;
		const end = start + maxShownArticlesPerPage;
		return articlesMetadata.slice(start, end);
	}, [currentPage, maxShownArticlesPerPage, articlesMetadata])

    return (
	    <div className={"flex flex-col justify-between items-center gap-6"}>
		    <h1 className={"text-primary"}>Latest Article</h1>
		    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center-safe gap-6 auto-rows-fr pt-4"}>
			    {currentArticles.map((metadata) => (
					  <ArticleCard key={metadata.slug} title={metadata.title} excerpt={metadata.excerpt} date={metadata.date} author={metadata.author} slug={metadata.slug} />
			    ))}
		    </div>

		    <div className={"join join-horizontal"}>
			    <div onClick={() => {setCurrentPage(currentPage - 1)}} className={clsx("join-item btn btn-ghost", {"btn-disabled": currentPage === 1})}>
				    <ChevronLeft className={"size-5"} />
			    </div>
			    <div className={clsx("join-item btn btn-ghost", {"btn-disabled text-base-content": currentPage === 1})}>
				    {currentPage}
				</div>
			    <div onClick={() => {setCurrentPage(currentPage + 1)}} className={clsx("join-item btn btn-ghost", {"btn-disabled": currentPage === 1})}>
				    <ChevronRight className={"size-5"} />
			    </div>
		    </div>
	    </div>
    )
}

export default LatestArticleGridList;