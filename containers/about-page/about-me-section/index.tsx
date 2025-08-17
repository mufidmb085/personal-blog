import {clsx} from "clsx";
import {authorProfile} from "@/config/authorProfile";
import AuthorProfile from "@/components/about/AuthorProfile";

interface AboutMeSectionProps {
	className?: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ className }) => {
	return (
		<div className={clsx(className)}>
			<AuthorProfile authorName={authorProfile.authorName} authorDescription={authorProfile.authorDescription} authorAvatar={authorProfile.authorAvatar} authorEmail={authorProfile.authorEmail} authorSocialsLink={authorProfile.authorSocialsLink} />
		</div>
	)
}

export default AboutMeSection