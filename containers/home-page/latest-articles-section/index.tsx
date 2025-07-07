import {ArticleMetadata} from "@/interfaces/article.model";
import {getAllArticleMetadata} from "@/libs/articles";
import ArticleCard from "@/components/blog/articles/ArticleCard";
import {Link} from "@heroui/link";
import clsx from "clsx";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";

interface LatestArticlesSectionProps {
	className?: string;
}

const LatestArticlesSection = ({className}: LatestArticlesSectionProps) => {

	const articlesMetadata: ArticleMetadata[] = getAllArticleMetadata();

	return (
		<section className={clsx(className)}>
			<Card disableRipple={true} disableAnimation={true} shadow={"sm"} allowTextSelectionOnPress={false} className={"max-w-lg gap-6 bg-content1 p-8"}>
				<CardHeader className={"flex flex-col items-center justify-center gap-2"}>
					<h1 className={"text-4xl text-primary font-semibold uppercase text-center"}>Latest Articles</h1>
					<h2 className={"text-lg text-content1-foreground items-center text-center"}>Things I&#39;ve been thinking and writing about lately</h2>
				</CardHeader>
				<CardBody className={"flex flex-col gap-4 items-center justify-center"}>
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
				</CardBody>
				<CardFooter className={"flex flex-col gap-4 items-center justify-center"}>
					{articlesMetadata.length > 3 && (
						<Link href={"/blog"} className={"items-center justify-center"}>Discover More</Link>
					)}
				</CardFooter>
			</Card>
		</section>
	)
}

export default LatestArticlesSection;