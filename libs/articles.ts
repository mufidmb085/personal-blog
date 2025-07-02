import path from "node:path";
import fs from "node:fs"
import {Article, ArticleList, ArticleMetadata} from "@/interfaces/article.model";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";


const articleDir = path.join(process.cwd(), "data", "articles");

export async function getAllArticles(): Promise<ArticleList[]> {
	const files = fs.readdirSync(articleDir).filter((file) =>
		file.endsWith(".mdx") || file.endsWith(".md")
	);

	return files.map((filename) => {
		const fullPath = path.join(articleDir, filename);
		const rawContent = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(rawContent);

		const slug = filename.replace(/\.mdx?$/, "");

		return {
			metadata: {
				...(data as ArticleMetadata),
				slug,
			},
			content,
		};
	});
}


export async function getArticleBySlug(slug: string): Promise<Article> {
	const filePath = path.join(articleDir, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) throw new Error(`Article not found: ${slug}`);

	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	const mdxSource = await serialize(content, {
		scope: data,
	});

	return {
		metadata: {
			...(data as ArticleMetadata),
			slug,
		},
		content: mdxSource,
	};
}

export function getAllArticleMetadata(): ArticleMetadata[] {
	const files = fs.readdirSync(articleDir).filter((file) =>
		file.endsWith(".mdx") || file.endsWith(".md")
	);

	const articles = files.map((filename) => {
		const fullPath = path.join(articleDir, filename);
		const rawContent = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(rawContent);
		const slug = filename.replace(/\.mdx?$/, "");

		return {
			...(data as ArticleMetadata),
			slug,
		};
	});

	// Sort by date (descending / newest first)
	return articles.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});
}

