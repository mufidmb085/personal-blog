import { MDXRemoteSerializeResult } from "next-mdx-remote";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export interface ArticleMetadata {
	title: string;
	date: Date;
	slug: string;
	excerpt?: string;
	image?: string | StaticImport;
	author: string;
}

export interface Article {
	metadata: ArticleMetadata;
	content: MDXRemoteSerializeResult;
}

