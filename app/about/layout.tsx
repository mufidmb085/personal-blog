export default function AboutLayout({children,}: { children: React.ReactNode; }) {
	return (
		<section className="flex flex-col items-center justify-center w-full min-h-screen">
			{children}
		</section>
	);
}