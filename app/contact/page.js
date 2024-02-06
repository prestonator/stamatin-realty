import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	return (
		<main className="flex-1">
			<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<Image
							alt="Agent"
							className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last lg:aspect-square"
							height="550"
							src="/alex.webp"
							width="550"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Your Trusted Real Estate Agent
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
									I am committed to helping you find your dream home. With years
									of experience and a passion for service, let&apos;s make your home
									buying journey a success.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									View Listings
								</Link>
								<Link
									className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Contact Me
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg dark:bg-gray-800">
								Services
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Personalized Service. Exceptional Results.
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								I offer a full suite of real estate services tailored to your
								needs. From finding the perfect home to negotiating the best
								price, I&apos;m here to guide you every step of the way.
							</p>
						</div>
					</div>
					<div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
						<Image
							alt="Service Image"
							className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
							height="310"
							src="/5.webp"
							width="550"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<ul className="grid gap-6">
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Home Buying</h3>
										<p className="text-gray-500 dark:text-gray-400">
											I&apos;ll help you find the perfect home that fits your needs
											and budget.
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Home Selling</h3>
										<p className="text-gray-500 dark:text-gray-400">
											I&apos;ll ensure your home is marketed effectively to attract
											potential buyers.
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Relocation</h3>
										<p className="text-gray-500 dark:text-gray-400">
											Moving to a new city? I can help make the transition
											smooth and stress-free.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Ready to find your dream home?
						</h2>
						<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Contact me today and let&apos;s start your home buying journey
							together.
						</p>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
						<Link
							className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="#"
						>
							Contact Me
						</Link>
						<Link
							className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							href="#"
						>
							View Listings
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
				<div className="container px-4 md:px-6">
					<div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
						<div className="space-y-4">
							<div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg dark:bg-gray-800">
								Personalized Service
							</div>
							<h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
								Your Trusted Real Estate Agent
							</h2>
							<Link
								className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow h-9 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Contact Me
							</Link>
						</div>
						<div className="flex flex-col items-start space-y-4">
							<div className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-lg dark:bg-gray-800">
								Exceptional Results
							</div>
							<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
								I am committed to helping you find your dream home. With years
								of experience and a passion for service, let&apos;s make your home
								buying journey a success.
							</p>
							<Link
								className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-white border border-gray-200 rounded-md shadow-sm h-9 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
								href="#"
							>
								View Listings
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Contact;
