import Image from "next/image";
import SwiperSlides from "@/components/Swiper/Swiper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	LuHome,
	LuDollarSign,
	LuCheck,
	LuFacebook,
	LuLinkedin,
	LuInstagram,
	LuArrowUpRight,
} from "react-icons/lu";
import LatestPosts from "./blog/[slug]/parts/latestPosts";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import FetchButton from "@/features/components/FetchButton";
import ButtonSection from "@/components/ButtonSection";

const HomePage = async () => {
	return (
		<main className="min-h-screen bg-[#efefef]">
			<Hero />
			<SearchBar />
			<WhyChooseUs bgColor="bg-gray-200" />
			{/*<FetchButton /><ButtonSection /> */}
			<FeaturedListings bgColor="bg-gray-100" />
			<BlogPreview bgColor="bg-gray-200" />
			<TestimonialSection bgColor="bg-gray-100" />
			<AboutMe bgColor="bg-gray-200" />
		</main>
	);
};

export default HomePage;

const Hero = () => {
	return (
		<section
			className="py-60 bg-blend-multiply"
			style={{
				backgroundImage: `url(/HeroImages/homeHero.webp)`,
				backgroundSize: "cover",
				backgroundColor: "rgba(11, 10, 7, 0.7)",
				backgroundPositionY: "center",
			}}
		>
			<div className="relative flex flex-col items-center justify-center gap-4">
				<div>
					<h1 className="text-3xl font-bold text-center text-white">
						Make A Move For <br /> Your Future.
					</h1>
				</div>
				<div>
					<span className="text-white">
						The Most Followed Real Estate Brand in the World.
					</span>
				</div>
			</div>
		</section>
	);
};

const SearchBar = () => {
	return (
		<div className="relative hidden w-full sm:block">
			<div className="left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 absolute bg-white p-5 rounded-full shadow flex items-center space-x-4 w-full md:w-3/4 mx-auto flex-wrap justify-center gap-2 sm:flex-nowrap">
				<Select>
					<SelectTrigger className="flex items-center justify-between space-x-2 rounded-3xl w-[75vw] sm:w-full">
						<div className="flex items-center space-x-2">
							<LuHome className="w-4 h-4" />
							<SelectValue placeholder="For Rent" />
						</div>
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectItem value="for-sale">For Sale</SelectItem>
						<SelectItem value="for-rent">For Rent</SelectItem>
						<SelectItem value="new-project">New Project</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger
						className="flex items-center space-x-2 rounded-3xl w-[75vw] sm:w-full"
						id="property-category"
					>
						<div className="flex items-center space-x-2">
							<LuDollarSign className="w-4 h-4" />
							<SelectValue placeholder="House" />
						</div>
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectItem value="house">House</SelectItem>
						<SelectItem value="apartment">Apartment</SelectItem>
						<SelectItem value="villa">Villa</SelectItem>
					</SelectContent>
				</Select>
				<Input
					className="flex items-center space-x-2 rounded-3xl w-[75vw] sm:w-full"
					placeholder="📍 Norman, OK"
					type="text"
				/>
				<Button className="px-4 py-2 text-white bg-gray-800 rounded-3xl hover:bg-blue-700">
					Find Property
				</Button>
			</div>
		</div>
	);
};

const WhyChooseUs = ({ bgColor }) => {
	return (
		<section className={`pt-24 pb-12 ${bgColor}`}>
			<div className="flex flex-col justify-center px-24 sm:flex-row">
				<div className="basis-1/2">
					<h2 className="mb-8 text-3xl font-bold">
						Discover What Makes
						<br />
						<span className="italic text-[#B40101]">Stamatin Realty</span>
						<br />
						Exceptional
					</h2>
				</div>
				<div className="basis-1/3">
					<p className="mb-12 text-gray-600">
						With a personalized approach for each of my clients needs, I ensure
						a smooth transaction process from start to finish. By leveraging
						cutting-edge technology and my extensive market knowledge, I
						transform the home buying experience into a memorable adventure
						filled with excitement and satisfaction.
					</p>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-4 px-8 py-8 jus">
				<Card className="w-[20rem] overflow-hidden">
					<Image
						alt="Expertise"
						className="object-cover w-full h-64"
						src="/StockImages/expertise.webp"
						width={300}
						height={200}
					/>
					<CardContent className="p-8">
						<h3 className="text-xl font-semibold">Expertise</h3>
						<hr className="border-[#B40101] w-1/3 my-2 border-2" />
						<p className="text-gray-600">
							Our team of experienced professionals are dedicated to providing
							personalized service.
						</p>
					</CardContent>
				</Card>
				<Card className="w-[20rem] overflow-hidden">
					<Image
						alt="Trust"
						className="object-cover w-full h-64"
						src="/StockImages/trust.webp"
						width={300}
						height={200}
					/>
					<CardContent className="p-8">
						<h3 className="text-xl font-semibold">Trust</h3>
						<hr className="border-[#B40101] w-1/3 my-2 border-2" />
						<p className="text-gray-600">
							We value the trust of our clients and work hard to maintain it.
						</p>
					</CardContent>
				</Card>
				<Card className="w-[20rem] overflow-hidden">
					<Image
						alt="Quality"
						className="object-cover w-full h-64"
						src="/StockImages/quality.webp"
						width={300}
						height={200}
					/>
					<CardContent className="p-8">
						<h3 className="text-xl font-semibold">Quality</h3>
						<hr className="border-[#B40101] w-1/3 my-2 border-2" />
						<p className="text-gray-600">
							We ensure the highest quality in all our services and properties.
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

const FeaturedListings = ({ bgColor }) => {
	return (
		<section className={`py-16 ${bgColor}`}>
			<div className="flex flex-col items-center justify-center pb-8 space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Featured Listings
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Explore our handpicked selection of the finest properties available.
					</p>
				</div>
			</div>
			<SwiperSlides />
		</section>
	);
};

const BlogPreview = ({ bgColor }) => {
	return (
		<section className={`py-16 ${bgColor}`}>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Recent Blog Posts
						</h2>
						<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Stay updated with the latest news and insights from our real
							estate experts.
						</p>
					</div>
				</div>
				<LatestPosts />
				<div className="flex justify-center">
					<Link href="/blog">
						<Button>View All Posts</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

const TestimonialSection = ({ bgColor }) => {
	return (
		<section className={`${bgColor} text-black py-24 overflow-hidden`}>
			<div className="container px-4 md:px-6">
				<div className="mx-auto max-w-7xl">
					<div className="relative ">
						<div className="flex flex-col items-center justify-center">
							<p className="text-4xl sm:text-[10vw] text-[#B40101] opacity-20 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-black overflow-visible">
								Testimonials
							</p>
							<p className="relative z-20 mt-10 text-4xl font-bold text-center text-gray-800 sm:mt-28 dark:text-gray-700">
								What our customers say
							</p>
						</div>
					</div>
					<div className="relative items-center justify-center">
						<p className="mt-20 text-base font-medium text-center">
							&quot;A well-designed real estate website can be the bridge
							<br />
							that connects buyers to their dream homes,
							<br />
							and sellers to the right buyers.&quot;
						</p>
					</div>

					<div className="relative flex items-center justify-center">
						<p className="text-4xl sm:text-[10vw] text-[#393939] opacity-20 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-black overflow-visible">
							Coming Soon!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

const AboutMe = ({ bgColor }) => {
	return (
		<section className={`py-12 ${bgColor} md:py-24 lg:py-32`}>
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
					<Image
						alt="Realtor"
						className="object-cover object-center mx-auto overflow-hidden rounded-full shadow-lg aspect-square w-[50vw] lg:aspect-[2/3] lg:w-full lg:order-last"
						height="500"
						src="/Alex/headshot.jpg"
						width="500"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Meet Alex Stamatin
							</h2>
							<span>Your Trusted Guide in the Real Estate market.</span>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Alex Stamatin is an enthusiastic real estate agent in Central
								Oklahoma. With a year of experience, Alex guides home buyers and
								sellers smoothly through the process. Known for a personal
								approach, Alex leverages market knowledge to help clients
								achieve their real estate goals.
							</p>
						</div>
						<ul className="grid gap-2 py-4">
							<li>
								<LuCheck className="inline-block w-4 h-4 mr-2" />
								Almost 2 years of experience in the real estate industry.
							</li>
							<li>
								<LuCheck className="inline-block w-4 h-4 mr-2" />
								Trusted advisor and skilled negotiator.
							</li>
							<li>
								<LuCheck className="inline-block w-4 h-4 mr-2" />
								Exceptional customer service and attention to detail.
							</li>
						</ul>

						<div className="flex flex-row gap-2">
							<a
								className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
								href="https://www.facebook.com/alex.stamatin.9"
								target="_blank"
							>
								<LuFacebook className="w-4 h-4 mr-2" />
								Facebook
							</a>
							<a
								className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white transition-colors bg-[#E1306C] rounded-md shadow hover:bg-[#C13584] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
								href="https://www.instagram.com/alexstamatinrealty/"
								target="_blank"
							>
								<LuInstagram className="w-4 h-4 mr-2" />
								Instagram
							</a>
							<a
								className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white transition-colors bg-blue-800 rounded-md shadow hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900 disabled:pointer-events-none disabled:opacity-50"
								href="https://www.linkedin.com/in/alexander-stamatin-a281711b6/"
								target="_blank"
							>
								<LuLinkedin className="w-4 h-4 mr-2" />
								LinkedIn
							</a>
						</div>
						<div>
							<Link href="/about">
								<Button className="items-center">
									Learn More about Alex <LuArrowUpRight className="w-6 h-6" />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
