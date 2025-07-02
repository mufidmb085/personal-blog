export default function AboutLayout({children,}: { children: React.ReactNode; }) {
	return (
		<section className="flex flex-col w-full min-h-screen">
			{children}
		</section>
	);
}