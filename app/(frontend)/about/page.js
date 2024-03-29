import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LuStar } from "react-icons/lu";
import Image from "next/image";

const About = () => {
	return (
		<div
			key="1"
			className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900"
		>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-32">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
							<Image
								alt="Realtor"
								className="object-cover mx-auto overflow-hidden rounded-full aspect-square sm:w-full lg:order-last"
								height={500}
								src="/Alex/headshot.jpg"
								width={500}
							/>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Alex Stamatin, Realtor
									</h1>
									<span>Your Trusted Guide in the Real Estate market.</span>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										Born and raised in Oklahoma, I attended Norman North High
										School, contributing to its two-time state champion swim
										team and earning national recognition in my individual
										events. Following this, I pursued my academic and athletic
										endeavors at Missouri State University before returning home
										to pursue a degree in economics at the University of
										Oklahoma.
									</p>
									<p className="mt-6 text-gray-500 md:text-xl dark:text-gray-400">
										After college, I began my career in real estate, an endeavor
										I&apos;ve always dreamed of pursuing. With nearly 2 years of
										expertise under Keller Williams, I harness the power of
										cutting-edge technology and to deliver unparalleled results
										for my clients. I look forward to embarking on a journey
										where tradition meets innovation, ensuring your real estate
										experience is nothing short of exceptional.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
					id="services"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Services
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									I offer a range of real estate services to meet your needs.
									Whether you&apos;re buying, selling, or renting, I&apos;m here
									to help.
								</p>
							</div>
						</div>
						<div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<ul className="grid gap-6">
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">Buying</h3>
											<p className="text-gray-500 dark:text-gray-400">
												I&apos;ll help you find the perfect home that fits your
												budget and lifestyle.
											</p>
										</div>
									</li>
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">Selling</h3>
											<p className="text-gray-500 dark:text-gray-400">
												I&apos;ll work to get you the best price for your
												property in the shortest amount of time.
											</p>
										</div>
									</li>
								</ul>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<ul className="grid gap-6">
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">Renting</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Whether you&apos;re looking for a place to rent or need
												to rent out your property, I can assist.
											</p>
										</div>
									</li>
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">Consulting</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Get professional advice on real estate investments and
												market trends.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Testimonials
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Hear what my clients have to say about working with me.
								</p>
							</div>
						</div>
						<div className="relative flex flex-col items-center justify-center">
							<p className="text-4xl sm:text-[10vw] text-[#393939] opacity-20 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-black overflow-visible">
								Coming Soon!
							</p>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Contact Me
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Ready to get started or have any questions? Reach out to me.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mt-8 space-y-4 text-center">
							<p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								Email: alex.stamatin@kw.com
							</p>
							<p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								Phone: (405) 250-7303
							</p>
						</div>
						<div className="mt-8">
							<Card>
								<CardHeader>
									<CardTitle>Contact Form</CardTitle>
									<CardDescription>
										Fill out the form below and I&apos;ll get back to you as
										soon as possible.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form className="space-y-4">
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input id="name" placeholder="Enter your name" />
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												placeholder="Enter your email"
												type="email"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="message">Message</Label>
											<Textarea
												className="min-h-[100px]"
												id="message"
												placeholder="Enter your message"
											/>
										</div>
										<Button>Send message</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default About;
