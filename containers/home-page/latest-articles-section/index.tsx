import {ArticleMetadata} from "@/interfaces/article.model";
import {getAllArticleMetadata} from "@/libs/articles";
import ArticleCard from "@/components/blog/articles/ArticleCard";
import {Divider} from "@heroui/divider";
import {Link} from "@heroui/link";

const LatestArticlesSection = () => {

	const articlesMetadata: ArticleMetadata[] = getAllArticleMetadata();

	return (
		<section className={"flex flex-col items-center justify-center gap-8 p-8 py-16 m-8 lg:m-16 max-w-screen-xl bg-content1 rounded-xl drop-shadow-2xl"}>
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className={"text-2xl md:text-4xl font-bold text-primary"}>Latest Articles</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
				{articlesMetadata.slice(0, 3).map((metadata) => (
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
			<div className="flex flex-col items-center justify-center gap-8">
				{articlesMetadata.length > 3 && (
					<div className="flex flex-col items-center justify-center gap-8">
						<Link href={"/blog"}>Discover More</Link>
					</div>
				)}
			</div>
		</section>
	)
}

export default LatestArticlesSection;