import {clsx} from "clsx";
import React from "react";

interface HeroProps {
	headline: string;
	subheadline: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline }) => {
	return (
		<div className={"hero min-h-screen"} id={"hero"}>
			<div className={"hero-content min-w-full lg:justify-start p-0 m-0"}>
				<div className={clsx("max-w-lg")}>
					<div className={"inline-flex flex-col text-center lg:text-start text-neutral gap-4"}>
						<h1 className={"text-4xl lg:text-6xl font-bold"}>
							{ headline }
						</h1>
						<p className={"text-neutral/75"}>
							{ subheadline }
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero;