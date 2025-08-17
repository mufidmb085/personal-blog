"use client";

import {useRouter} from "next/navigation";
import React, {useCallback} from "react";
import {ArticleMetadata} from "@/interfaces/article.model";
import Image from "next/image";
import {UserCircleIcon} from "lucide-react";

const ArticleCard:React.FC<ArticleMetadata> = ({ title, excerpt, image, author, date, slug }) => {

	const router = useRouter();
	const onPressed = useCallback((e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
		e.preventDefault();
		e.stopPropagation();
		router.push(`/blog/articles/${slug}`);
	}, [router, slug]);

	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	return (
		<article className={"card card-md not-prose max-w-xs h-full rounded-none text-base-content cursor-pointer select-none"} onClick={onPressed} onTouchStart={onPressed}>
			<figure>
				<Image src={image || "/svg/default-article-thumbnail.svg"} width={320} height={320} placeholder={"empty"} alt={"Thumbnail"} className={"aspect-[1/1] bg-neutral rounded-md object-cover object-center"} />
			</figure>
			<div className={"card-body justify-between px-0 mx-0 gap-4"}>
				<h1 className={"card-title link link-hover line-clamp-2"}>{title}</h1>
				<p className={"font-serif line-clamp-3 max-h-fit"}>{excerpt}</p>
				<div className={"flex flex-row items-center justify-start space-x-2 font-light text-base-content/75 text-xs"}>
					<div className={"inline-flex items-center gap-1"}>
						<div className="avatar">
							<UserCircleIcon className={"size-5"} />
						</div>
						<span className={"truncate"}>{author}</span>
					</div>
					<span>•</span>
					<span>{`${day}-${month}-${year}`}</span>
				</div>
			</div>
		</article>
	)
}

export default ArticleCard;