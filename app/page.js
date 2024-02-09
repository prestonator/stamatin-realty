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
import { LuSearch, LuHome, LuDollarSign } from "react-icons/lu";
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
			<div className="flex gap-4 px-12 py-8">
				<Card className="w-full overflow-hidden">
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
				<Card className="w-full overflow-hidden">
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
				<Card className="w-full overflow-hidden">
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
		<section>
			<div></div>
		</section>
	);
};

const AboutMe = ({ bgColor }) => {
	return (
		<section className={`py-12 ${bgColor} md:py-24 lg:py-32`}>
			<div className="flex flex-col items-center justify-center mb-8 space-y-4 text-center">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						About Me
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Get to know your trusted realtor.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow justify-evenly md:flex-row">
				<div className="relative w-[15vw] h-[15vw]">
					<Image
						className="object-cover w-48 h-48 mx-auto border-4 border-gray-200 rounded-full dark:border-gray-800 md:mx-0 md:mr-8"
						src={headshotTransparent}
						alt="Realtor headshot"
						fill
					/>
				</div>
				<div className="mt-4 md:w-2/3 md:mt-0">
					<h2 className="text-xl font-semibold leading-tight">Alex Stamatin</h2>
					<p className="mt-2 text-gray-600">Licensed Real Estate Agent</p>
					<div className="flex items-center mt-1">
						<IoMdHelpCircleOutline className="w-4 h-4 mr-2 text-gray-600" />
						<p className="text-gray-600">Serving the Greater Oklahoma area</p>
					</div>
					<hr className="my-4 border-gray-300 dark:border-gray-700" />
					<p className="text-gray-800">
						With over 0.5 years of experience in the real estate industry, I
						have the expertise and local knowledge to help you find your dream
						home. I am passionate about helping families relocate and making the
						home buying or selling process as smooth as possible.
					</p>
					<div className="flex flex-col items-center mt-4 md:flex-row">
						<button
							className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
							type="button"
						>
							Contact Me
						</button>
						<div className="flex mt-4 md:mt-0 md:ml-4">
							<span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
								Expert Negotiator
							</span>
							<span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
								Luxury Properties
							</span>
						</div>
					</div>
					<div className="flex mt-4">
						<a
							href="https://facebook.com"
							className="mr-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com"
							className="mr-4 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400"
						>
							<FaTwitter />
						</a>
						<a
							href="https://linkedin.com"
							className="mr-4 text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500"
						>
							<FaLinkedinIn />
						</a>
						<a
							href="https://instagram.com"
							className="text-pink-400 dark:text-pink-300 hover:text-pink-600 dark:hover:text-pink-500"
						>
							<FaInstagram />
						</a>
					</div>
					<div className="flex mt-4">
						<div className="mr-2 text-yellow-400">★ ★ ★ ★ ☆</div>
						<p className="text-gray-600">50+ Client Testimonials</p>
					</div>
				</div>
			</div>
		</section>
	);
};
