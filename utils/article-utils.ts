import { Article, ArticleMetadata } from "@/interfaces/article.model";

export const sortArticlesByDate = (articles: Article[]): Article[] => {
	return articles.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime())
};

export const sortArticleMetadataByDate = (metadatas: ArticleMetadata[]): ArticleMetadata[] => {
	return metadatas.sort((a, b) => b.date.getTime() - a.date.getTime())
};