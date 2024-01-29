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
								src="/alex.jpg"
								width={500}
							/>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Alex Stamatin, Realtor
									</h1>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										With over 10 years of experience in the real estate
										industry, I am committed to providing my clients with the
										highest level of service. My goal is to help you find your
										dream home or get the best price for your property.
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
						<div className="grid items-start max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4 lg:row-span-2">
								<div className="p-4 border rounded-lg shadow-lg">
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Jane Smith</h3>
										<div className="flex items-center gap-0.5">
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
										</div>
										<p className="text-gray-500 dark:text-gray-400">
											&quot;John was incredibly helpful and patient during our
											home buying process. We couldn&apos;t have done it without
											him!&quot;
										</p>
									</div>
								</div>
								<div className="p-4 border rounded-lg shadow-lg">
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Mike Johnson</h3>
										<div className="flex items-center gap-0.5">
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
										</div>
										<p className="text-gray-500 dark:text-gray-400">
											&quot;John&apos;s expertise and dedication made selling
											our home a breeze. Highly recommend!&quot;
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center mt-4 space-y-4 lg:col-start-2">
								<div className="p-4 border rounded-lg shadow-lg">
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Emily Parker</h3>
										<div className="flex items-center gap-0.5">
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
										</div>
										<p className="text-gray-500 dark:text-gray-400">
											&quot;I recently purchased the SparkleShine Home Cleaning
											Robot, and it has been a game-changer in my life. I used
											to spend hours every weekend cleaning my house, but now I
											can simply turn on this little robot and let it do the
											work.&quot;
										</p>
									</div>
								</div>
								<div className="p-4 border rounded-lg shadow-lg">
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Samuel Thompson</h3>
										<div className="flex items-center gap-0.5">
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
										</div>
										<p className="text-gray-500 dark:text-gray-400">
											&quot;John helped us find our dream home. He was patient,
											knowledgeable, and made the process enjoyable. Highly
											recommend!&quot;
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center space-y-4 lg:row-span-2">
								<div className="p-4 border rounded-lg shadow-lg">
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Linda Williams</h3>
										<div className="flex items-center gap-0.5">
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
										</div>
										<p className="text-gray-500 dark:text-gray-400">
											&quot;John was a pleasure to work with. He was always
											available to answer our questions and made the process of
											selling our home as smooth as possible.&quot;
										</p>
									</div>
								</div>
								<div className="p-4 border rounded-lg shadow-lg">
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">Robert Davis</h3>
										<div className="flex items-center gap-0.5">
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
											<LuStar className="w-5 h-5 fill-primary" />
										</div>
										<p className="text-gray-500 dark:text-gray-400">
											&quot;John&apos;s knowledge of the local market and his
											attention to detail were instrumental in finding us the
											perfect home. We couldn&apos;t be happier!&quot;
										</p>
									</div>
								</div>
							</div>
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
								Email: john.doe@realtor.com
							</p>
							<p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								Phone: (123) 456-7890
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
