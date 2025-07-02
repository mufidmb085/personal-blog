"use client";

import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import {Image} from "@heroui/image";
import {useRouter} from "next/navigation";
import {useCallback} from "react";
import {Divider} from "@heroui/divider";

interface ArticleCardProps {
	title: string;
	excerpt?: string;
	image?: string;
	author: string;
	date: string;
	slug: string;
}

export default function ArticleCard({ title, excerpt, image, author, date, slug }: ArticleCardProps) {
	const router = useRouter();

	const onPressed = useCallback(() => {
		router.push(`/blog/articles/${slug}`);
	}, [router, slug]);

	return (
		<Card className={"border-none bg-transparent max-w-sm h-full m-0 p-0"} disableRipple={true} disableAnimation={true} radius={"none"} shadow={"none"} allowTextSelectionOnPress={false} isPressable={true} onPress={onPressed}>
			<CardHeader className={"p-0"}>
				<div className="flex flex-col items-center justify-center gap-6 h-full">
					<Image alt="Thumbnail" src={image} radius={"md"} sizes={"100%"} isZoomed={true} className="aspect-[16/9] object-cover object-center w-full h-full" />
					<div className={"flex flex-col self-start items-center justify-center gap-2 bg-primary-100 mb-3"}>
						<p className="flex self-start items-center text-sm text-content1-foreground font-bold text-primary p-1">{date}</p>
					</div>
				</div>
			</CardHeader>
			<CardBody className={"m-0 p-0"}>
				<div className="flex flex-col items-start justify-start h-full gap-2 w-full">
					<div className="flex flex-col">
						<h1 className={"text-xl text-content1-foreground font-bold text-start  line-clamp-3 text-start"}>{title}</h1>
					</div>
					<div className="flex flex-col items-start justify-start">
						<p className={"text-sm text-content1-foreground overflow-hidden text-start line-clamp-7"}>{excerpt}</p>
					</div>
				</div>
			</CardBody>
			<CardFooter className={"p-0 m-0 pt-4"}>
				<Divider className={"w-full"} />
			</CardFooter>
		</Card>
	)
}