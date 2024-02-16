import Image from "next/image";
import QuickviewCard from "@/components/Cards/Quickview/Card";
import SwiperSlides from "@/components/Swiper/Swiper";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import headshotTransparent from "@/public/headshotTrans.webp";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	LuSearch,
	LuHome,
	LuDollarSign,
	LuCheck,
	LuFacebook,
	LuLinkedin,
	LuTwitter,
} from "react-icons/lu";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
//import FetchButton from "@/features/components/FetchButton";
//import ButtonSection from "@/components/ButtonSection";

const HomePage = async () => {
	return (
		<main className="min-h-screen bg-[#efefef]">
			<Hero />
			<SearchBar />
			<WhyChooseUs bgColor="bg-gray-100" />
			{/* <FetchButton /><ButtonSection />*/}
			<FeaturedListings bgColor="bg-gray-200" />
			<BlogPreview bgColor="bg-gray-100" />
			<OpenHouses bgColor="bg-gray-200" />
			<TestimonialSection bgColor="bg-gray-100" />
			<AboutMe bgColor="bg-gray-200" />
		</main>
	);
};

export default HomePage;

const Hero = () => {
	return (
		<section
			className="py-48 bg-blend-multiply"
			style={{
				backgroundImage: `url(/homeHero.webp)`,
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
		<div className="relative w-full">
			<div className="left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 absolute bg-white p-5 rounded-full shadow flex items-center space-x-4 w-[60vw] mx-auto">
				<Select>
					<SelectTrigger className="flex items-center justify-between space-x-2 rounded-3xl">
						<div className="flex items-center space-x-2">
							<LuDollarSign className="w-4 h-4" />
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
						className="flex items-center space-x-2 rounded-3xl"
						id="property-category"
					>
						<div className="flex items-center space-x-2">
							<LuHome className="w-4 h-4" />
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
					className="flex items-center space-x-2 rounded-3xl"
					placeholder="📍 Norman, Oklahoma"
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
		<section className={`py-12 ${bgColor} md:py-24 lg:py-32`}>
			<div className="flex justify-center px-24">
				<div className="basis-1/2">
					<h2 className="mb-8 text-3xl font-bold">
						Discover What Makes
						<br />
						<span className="italic text-red-400">Stamatin Realty</span>
						<br />
						Exceptional
					</h2>
				</div>
				<div className="basis-1/4">
					<p className="mb-12 text-gray-600">
						Alex is committed to providing his clients with exceptional
						services. As experts in his field, he offers a comprehensive suite
						of real estate solutions.
					</p>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-4 px-8 py-8 jus">
				<Card className="w-[20rem] overflow-hidden">
					<Image
						alt="Expertise"
						className="object-cover w-full h-64"
						src="/expertise.webp"
						width={300}
						height={200}
					/>
					<CardContent className="p-8">
						<h3 className="text-xl font-semibold">Expertise</h3>
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
						src="/trust.webp"
						width={300}
						height={200}
					/>
					<CardContent className="p-8">
						<h3 className="text-xl font-semibold">Trust</h3>
						<p className="text-gray-600">
							We value the trust of our clients and work hard to maintain it.
						</p>
					</CardContent>
				</Card>
				<Card className="w-[20rem] overflow-hidden">
					<Image
						alt="Quality"
						className="object-cover w-full h-64"
						src="/quality.webp"
						width={300}
						height={200}
					/>
					<CardContent className="p-8">
						<h3 className="text-xl font-semibold">Quality</h3>
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
		<section className={`py-12 ${bgColor} md:py-24 lg:py-32`}>
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
		<section className={`py-12 ${bgColor} md:py-24 lg:py-32`}>
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
				<div className="grid items-start max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
					<div className="relative flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Blog post 1"
							className="flex-shrink-0 object-cover w-full h-64"
							height={300}
							src="/expertise.webp"
							style={{
								aspectRatio: "500/300",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="flex flex-col justify-between flex-grow p-4 bg-white dark:bg-gray-950">
							<div>
								<h3 className="text-xl font-bold">The Future of Real Estate</h3>
								<p className="text-sm text-gray-500">
									Published on February 1, 2024
								</p>
								<p className="mt-2 text-sm">
									Discover the upcoming trends in the real estate market and how
									they can impact your investments.
								</p>
							</div>
							<Link
								className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow h-9 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Read more
							</Link>
						</div>
					</div>
					<div className="relative flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Blog post 2"
							className="flex-shrink-0 object-cover w-full h-64"
							height={300}
							src="/trust.webp"
							style={{
								aspectRatio: "500/300",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="flex flex-col justify-between flex-grow p-4 bg-white dark:bg-gray-950">
							<div>
								<h3 className="text-xl font-bold">
									Investing in Commercial Properties
								</h3>
								<p className="text-sm text-gray-500">
									Published on January 15, 2024
								</p>
								<p className="mt-2 text-sm">
									Learn the basics of investing in commercial properties and the
									potential benefits it can bring.
								</p>
							</div>
							<Link
								className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow h-9 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Read more
							</Link>
						</div>
					</div>
					<div className="relative flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Blog post 3"
							className="flex-shrink-0 object-cover w-full h-64"
							height={300}
							src="/quality.webp"
							style={{
								aspectRatio: "500/300",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="flex flex-col justify-between flex-grow p-4 bg-white dark:bg-gray-950">
							<div>
								<h3 className="text-xl font-bold">
									Understanding Real Estate Taxes
								</h3>
								<p className="text-sm text-gray-500">
									Published on January 1, 2024
								</p>
								<p className="mt-2 text-sm">
									A comprehensive guide to understanding and navigating real
									estate taxes.
								</p>
							</div>
							<Link
								className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow h-9 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Read more
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const OpenHouses = ({ bgColor }) => {
	return (
		<section className={`py-12 ${bgColor} md:py-24 lg:py-32`}>
			<div className="flex flex-col items-center justify-center pb-8 space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Open Houses
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Explore Open Houses happening in your area.
					</p>
				</div>
			</div>
			<SwiperSlides />
		</section>
	);
};

const TestimonialSection = ({ bgColor }) => {
	return (
		<section
			className={`${bgColor} text-black py-12 md:py-24 lg:py-32 overflow-hidden`}
		>
			<div className="container px-4 md:px-6">
				<div className="mx-auto max-w-7xl">
					<div className="relative ">
						<div className="flex flex-col items-center justify-center">
							<p className="text-[90px] sm:text-[10vw] text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-black overflow-visible md:overflow-hidden">
								reviews
							</p>
							<p className="relative z-20 mt-10 text-4xl font-bold text-center text-blue-900 sm:mt-28 dark:text-gray-700">
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
					<div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
						<div className="flex flex-col items-center gap-4">
							<p className="mt-4 text-sm bg-[#f1f5f9] p-6 rounded-lg shadow-xl">
								Thank you very much for the house found. This is an ideal option
								for our family at the location and price. The company employs
								real professionals who will always
							</p>
							<div className="flex flex-row items-center gap-2">
								<Avatar className="border shadow-lg w-14 h-14">
									<AvatarImage
										alt="Herbert Lindsey"
										src="/owen.webp?height=40&width=40"
									/>
									<AvatarFallback>HL</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-base font-medium">Owen Joyner</p>
									<p className="text-sm text-gray-500">New York, USA</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4">
							<p className="mt-4 text-sm bg-[#f1f5f9] p-6 rounded-lg shadow-xl">
								A gentleman from New York discovered what he calls an
								“oversight” on the part of 99.9% of all marketers that allows
								him to get otherwise paid-for advertising at Google as well as
								all other search engines.
							</p>
							<div className="flex flex-row items-center gap-2">
								<Avatar className="border shadow-lg w-14 h-14">
									<AvatarImage
										alt="Noah Russell"
										src="/arun.webp?height=40&width=40"
									/>
									<AvatarFallback>NR</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-base font-medium">Arun Chidambaram</p>
									<p className="text-sm text-gray-500">New York, USA</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4">
							<p className="mt-4 text-sm bg-[#f1f5f9] p-6 rounded-lg shadow-xl">
								For many of us, our very first experience of learning about the
								celestial bodies begins when we saw our first full moon in the
								sky. It is truly a magnificent view even
							</p>
							<div className="flex flex-row items-center gap-2">
								<Avatar className="border shadow-lg w-14 h-14">
									<AvatarImage
										alt="Nellie Griffith"
										src="/vrishab.webp?height=40&width=40"
									/>
									<AvatarFallback>NG</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-base font-medium">Vrishab Commuri</p>
									<p className="text-sm text-gray-500">New York, USA</p>
								</div>
							</div>
						</div>
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
						className="object-cover object-center mx-auto overflow-hidden rounded-full shadow-lg aspect-square w-[50vw] lg:aspect-auto lg:w-full lg:order-last"
						height="500"
						src="/headshot.jpg"
						width="500"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Meet John Doe
							</h2>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								With over 20 years of experience in the real estate industry,
								John Doe is a trusted advisor and negotiator. He is passionate
								about helping clients find their dream homes and is known for
								his attention to detail and exceptional customer service.
							</p>
						</div>
						<ul className="grid gap-2 py-4">
							<li>
								<LuCheck className="inline-block w-4 h-4 mr-2" />
								Over 20 years of experience in the real estate industry.
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
							<Link
								className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
								href="#"
							>
								<LuFacebook className="w-4 h-4 mr-2" />
								Facebook
							</Link>
							<Link
								className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white transition-colors bg-blue-400 rounded-md shadow hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
								href="#"
							>
								<LuTwitter className="w-4 h-4 mr-2" />
								Twitter
							</Link>
							<Link
								className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white transition-colors bg-blue-800 rounded-md shadow hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900 disabled:pointer-events-none disabled:opacity-50"
								href="#"
							>
								<LuLinkedin className="w-4 h-4 mr-2" />
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
