"use client";

import { useState, useMemo } from "react";
import { ArticleMetadata } from "@/interfaces/article.model";
import ArticleCard from "@/components/blog/articles/ArticleCard";
import { Divider } from "@heroui/divider";
import { Pagination } from "@heroui/pagination";

const ARTICLES_PER_PAGE = 9;

interface LatestArticleListProps {
	articlesMetadata: ArticleMetadata[];
}

const LatestArticleList = ({ articlesMetadata }: LatestArticleListProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(articlesMetadata.length / ARTICLES_PER_PAGE);

	const currentArticles = useMemo(() => {
		const start = (currentPage - 1) * ARTICLES_PER_PAGE;
		const end = start + ARTICLES_PER_PAGE;
		return articlesMetadata.slice(start, end);
	}, [currentPage, articlesMetadata]);

	return (
		<div className="flex flex-col items-center justify-center gap-8 max-w-screen-xl p-8 xl:p-0">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-4xl font-bold text-primary">Latest Articles</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
				{currentArticles.map((metadata) => (
					<ArticleCard
						key={metadata.slug}
						title={metadata.title}
						excerpt={metadata.excerpt}
						date={metadata.date}
						author={metadata.author}
						image={"/images/svg/default-article-thumbnail.svg"}
						slug={metadata.slug}
					/>
				))}
			</div>

			<Pagination
				total={totalPages}
				page={currentPage}
				onChange={setCurrentPage}
				showControls
				variant="light"
				size="md"
			/>
		</div>
	);
};

export default LatestArticleList;
