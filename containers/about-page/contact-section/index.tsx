import clsx from "clsx";
import ContactCard from "@/components/about/ContactCard";

interface ContactSectionProps {
	className?: string;
}

const ContactSection = ({className}: ContactSectionProps) => {
	return (
		<section className={clsx(className)}>
			<ContactCard />
		</section>
	)
}

export default ContactSection;