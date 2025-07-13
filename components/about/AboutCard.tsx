import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

export interface AboutProps {
	name: string;
	description: string;
	image?: string;
}

export default function AboutCard({ name, description, image }: AboutProps) {
	return (
		<Card disableRipple={true} disableAnimation={true} radius={"sm"} shadow={"sm"} allowTextSelectionOnPress={false} className="bg-content1 max-w-md p-6">
			<CardHeader className="flex flex-col w-full items-center justify-center gap-4">
				<h1 className="text-3xl text-primary font-bold uppercase tracking-wide">
					About Me
				</h1>
				{image && (
					<Image
						alt={"Thumbnail"}
						src={image}
						radius={"md"}
						sizes={"100%"}
						isZoomed
						className="aspect-[1/1] object-cover object-center w-full h-full"
					/>
				)}
			</CardHeader>
			<CardBody className="flex flex-col items-start justify-start h-full gap-2 w-full">
				<h2 className="text-2xl font-semibold text-content1-foreground">
					Hello, I&#39;m {name}
				</h2>
				<p className="text-base leading-relaxed text-content2-foreground">
					{description}
				</p>
			</CardBody>
		</Card>
	);
}
