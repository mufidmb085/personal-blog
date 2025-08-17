"use client"

import React from "react";
import {Article} from "@/interfaces/article.model";
import {MDXRemote} from "next-mdx-remote";
import {clsx} from "clsx";

interface ArticleRendererProps {
	className?: string;
	article: Article;
}

const ArticleRenderer:React.FC<ArticleRendererProps> = ({className, article}) => {

	const day = String(article.metadata.date.getDate()).padStart(2, '0');
	const month = String(article.metadata.date.getMonth() + 1).padStart(2, '0');
	const year = article.metadata.date.getFullYear();

	return (
		<article className={clsx("prose prose-sm sm:prose-base",)}>
			<header>
				<h1>{article.metadata.title}</h1>
				<p>{`${day}-${month}-${year}`}</p>
				<p>{article.metadata.author}</p>
			</header>
			<div className={"flex flex-col"}>
				<MDXRemote {...article.content} />
			</div>
		</article>
	)
}

export default ArticleRenderer;