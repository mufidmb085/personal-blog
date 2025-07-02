"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {Divider} from "@heroui/divider";

interface ArticleRendererProps {
	source: MDXRemoteSerializeResult;
	metadata: {
		title: string;
		author: string;
		date: string;
	};
}

export default function ArticleRenderer({ source, metadata }: ArticleRendererProps) {

	return (
		<article className={"flex flex-col max-w-screen-md w-full min-h-screen gap-6 p-8 lg:p-16"}>
			<header className="flex flex-col items-start justify-start gap-6">
				<div className={"flex flex-col"}>
					<h1 className={"text-[3.5rem] leading-[1.2] font-bold text-start tracking-tight"}>{metadata.title}</h1>
				</div>
				<div className={"flex flex-col gap-1"}>
					<p className={"flex items-center justify-start text-sm gap-1"}>
						<span className={"material-symbols-outlined"}>account_circle</span>
						{metadata.author}
					</p>
					<p className={"flex items-center justify-start text-sm text-content1-foreground gap-1"}>
						<span className={"material-symbols-outlined"}>calendar_today</span>
						{metadata.date}
					</p>
				</div>
				<Divider />
			</header>
			<div className={"article-default"}>
				<MDXRemote {...source} />
			</div>
		</article>
	);
}
