import {ArticleMetadata} from "@/interfaces/article.model";
import {getAllArticleMetadata} from "@/libs/articles";
import ArticleCard from "@/components/blog/articles/ArticleCard";
import {Link} from "@heroui/link";
import clsx from "clsx";

interface LatestArticlesSectionProps {
	className?: string;
}

const LatestArticlesSection = ({className}: LatestArticlesSectionProps) => {

	const articlesMetadata: ArticleMetadata[] = getAllArticleMetadata();

	return (
		<section className={clsx(className)}>
			<div className={"flex flex-col max-w-md gap-6 bg-content1 rounded-2xl p-8 place-content-center"}>
				<div className={"flex flex-col items-center justify-center gap-2"}>
					<h1 className={"text-2xl text-primary font-bold uppercase text-center"}>Latest Articles</h1>
					<h2 className={"text-lg text-content1-foreground font-light items-center text-center"}>Things I&#39;ve been thinking and writing about lately</h2>
				</div>
				<div className={"flex flex-col gap-4"}>
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
				{articlesMetadata.length > 3 && (
					<Link href={"/blog"} className={"items-center justify-center"}>Discover More</Link>
				)}
			</div>
		</section>
	)
}

export default LatestArticlesSection;