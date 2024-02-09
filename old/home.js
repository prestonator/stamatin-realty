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
import { LuSearch } from "react-icons/lu";
//import FetchButton from "@/features/components/FetchButton";
//import ButtonSection from "@/components/ButtonSection";

const Hero = () => {
	return (
		<div className="flex flex-col items-center p-4 overflow-hidden bg-white rounded-lg shadow-lg sm:flex-row">
			<div className="flex items-center mb-4 overflow-hidden border border-gray-300 rounded-lg sm:mb-0">
				<RadioGroup className="flex" defaultValue="buy">
					<Label
						className="px-6 py-3 text-lg font-semibold bg-gray-200 border-r border-gray-300 cursor-pointer"
						htmlFor="buy"
					>
						<RadioGroupItem className="sr-only" id="buy" value="buy" />
						Buy
					</Label>
					<Label
						className="px-6 py-3 text-lg font-semibold bg-white cursor-pointer"
						htmlFor="rent"
					>
						<RadioGroupItem className="sr-only" id="rent" value="rent" />
						Rent
					</Label>
				</RadioGroup>
			</div>
			<Input
				className="flex-1 px-6 py-3 mb-4 text-lg sm:mb-0 sm:ml-6"
				placeholder="Search..."
				type="search"
			/>
			<Button
				className="px-6 py-3 transition-colors hover:bg-gray-700 sm:ml-4"
				variant="solid"
			>
				<LuSearch className="w-6 h-6" />
			</Button>
		</div>
	);
};

const HomePage = async () => {
	return (
		<main className="min-h-screen bg-[#efefef]">
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
					<Hero />
				</div>
			</section>
			{/*  
			<FetchButton />
			<ButtonSection />
			*/}
			<section className="py-24">
				<div className="flex flex-col items-center justify-center pb-8 space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Featured Listings
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Explore our handpicked selection of the finest properties
							available.
						</p>
					</div>
				</div>
				<SwiperSlides />
			</section>
			<section className="pb-24">
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
			<section className="container px-4 py-8 mx-auto">
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
						<h2 className="text-xl font-semibold leading-tight">
							Alex Stamatin
						</h2>
						<p className="mt-2 text-gray-600">Licensed Real Estate Agent</p>
						<div className="flex items-center mt-1">
							<IoMdHelpCircleOutline className="w-4 h-4 mr-2 text-gray-600" />
							<p className="text-gray-600">Serving the Greater Oklahoma area</p>
						</div>
						<hr className="my-4 border-gray-300 dark:border-gray-700" />
						<p className="text-gray-800">
							With over 0.5 years of experience in the real estate industry, I
							have the expertise and local knowledge to help you find your dream
							home. I am passionate about helping families relocate and making
							the home buying or selling process as smooth as possible.
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
		</main>
	);
};

export default HomePage;
