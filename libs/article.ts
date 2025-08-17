import path from "node:path";
import fs from "node:fs"
import {Article, ArticleMetadata} from "@/interfaces/article.model";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const articleDir = path.join(process.cwd(), "content", "articles");

export const getArticleBySlug = async (slug: string): Promise<Article> => {
	const filePath = path.join(articleDir, `${slug}.mdx`)

	if (!fs.existsSync(filePath)) throw new Error(`Article not found: ${slug}`)

	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { data, content } = matter(fileContent);

	const mdxSource = await serialize(content, { scope: data,})

	return {
		metadata: {
			...(data as Omit<ArticleMetadata, "date" | "slug">),
			date: new Date(data.date),
			slug,
		},
		content: mdxSource,
	};
}

export const getAllArticles = async (): Promise<Article[]> => {
	const files = fs.readdirSync(articleDir).filter((file) => {
		const fullPath = path.join(articleDir, file);
		return (
			fs.statSync(fullPath).isFile() &&
			(file.endsWith(".mdx") || file.endsWith(".md"))
		)
	})

	const articles = await Promise.all(
		files.map(async (filename) => {
			const fullPath = path.join(articleDir, filename);
			const rawContent = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(rawContent);

			const slug = filename.replace(/\.mdx?$/, "");

			const mdxSource = await serialize(content, { scope: data });

			return {
				metadata: {
					...(data as Omit<ArticleMetadata, "date" | "slug">),
					date: new Date(data.date),
					slug,
				},
				content: mdxSource,
			}
		})
	)

	return articles;
}

export const getAllArticlesMetadata = async (): Promise<ArticleMetadata[]> => {
	const files = fs.readdirSync(articleDir).filter((file) => {
		const fullPath = path.join(articleDir, file);
		return (
			fs.statSync(fullPath).isFile() &&
			(file.endsWith(".mdx") || file.endsWith(".md"))
		)
	})

	return files.map((filename) => {
		const fullPath = path.join(articleDir, filename);
		const rawContent = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(rawContent);

		const slug = filename.replace(/\.mdx?$/, "")

		return {
			...(data as Omit<ArticleMetadata, "date" | "slug">),
			date: new Date(data.date),
			slug,
		}
	})
}


