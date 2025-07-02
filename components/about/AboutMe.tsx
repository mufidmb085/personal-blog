import {Image} from "@heroui/image";

export interface AboutMeProps {
	name: string;
	description: string;
	image: string;
}

export default function AboutMe({ name, description, image }: AboutMeProps) {
	return (
		<div className="flex flex-col sm:grid sm:grid-cols-5  items-center justify-center w-full gap-6">
			<div className="flex flex-row col-span-2 self-start items-start justify-center gap-2 w-full">
				<Image src={image} sizes={"100%"} className={"aspect-square object-contain object-center w-full h-full max-w-[360px]"} />
			</div>
			<div className="flex flex-col col-span-3 self-end items-start justify-center gap-2 max-w-lg">
				<h2 className={"text-2xl text-foreground font-medium"}>Hello</h2>
				<h1 className={"text-4xl text-foreground font-medium"}>Im {name}</h1>
				<p className={"text-md text-foreground font-normal"}>{description}</p>
			</div>
		</div>
	)
}