import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ArticleMetadata {
	title: string;
	date: string;
	slug: string;
	excerpt: string;
	image?: string;
	author: string;
}

export interface Article {
	metadata: ArticleMetadata;
	content: MDXRemoteSerializeResult;
}

export interface ArticleList {
	metadata: ArticleMetadata;
	content: string;
}

