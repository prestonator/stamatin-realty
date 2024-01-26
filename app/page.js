import Image from "next/image";
import { GoSearch } from "react-icons/go";
import QuickviewCard from "@/components/Cards/Quickview/Card";
import SwiperSlides from "@/components/Swiper/Swiper";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import headshotTransparent from "@/public/headshotTrans.png";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#efefef]">
			<section className="pt-32">
				<div className="flex flex-col items-center justify-center gap-4">
					<div>
						<h1 className="text-3xl font-bold text-center">
							Make A Move For <br /> Your Future.
						</h1>
					</div>
					<div>
						<span>The Most Followed Real Estate Brand in the World.</span>
					</div>
					<div className="flex items-center justify-between w-1/2 gap-4 px-4 py-6 bg-white shadow-md rounded-2xl">
						<div>
							<select name="type" id="type">
								<option value="Buy">Buy</option>
								<option value="Sell">Sell</option>
								<option value="Rent">Rent</option>
							</select>
						</div>
						<div className="w-full">
							<input
								type="text"
								className="w-full px-6 py-4 rounded ring-1 ring-gray-400 ring-opacity-50"
								placeholder="Search by address or area"
							/>
						</div>
						<div className="bg-[#7C9082] p-3 rounded-3xl">
							<GoSearch className="w-5 h-5" />
						</div>
					</div>
				</div>
			</section>
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
						<h2 className="text-xl font-semibold leading-tight">John Doe</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							Licensed Real Estate Agent
						</p>
						<div className="flex items-center mt-1">
							<IoMdHelpCircleOutline className="w-4 h-4 mr-2 text-gray-600" />
							<p className="text-gray-600">
								Serving the Greater Los Angeles area
							</p>
						</div>
						<hr className="my-4 border-gray-300 dark:border-gray-700" />
						<p className="text-gray-800">
							With over 10 years of experience in the real estate industry, I
							have the expertise and local knowledge to help you find your dream
							home. I am passionate about helping families relocate and making
							the home buying or selling process as smooth as possible.
						</p>
						<div className="flex flex-col items-center mt-4 md:flex-row">
							<button
								className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Contact Me
							</button>
							<div className="flex mt-4 md:mt-0 md:ml-4">
								<span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
									Expert Negotiator
								</span>
								<span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
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
							<p className="text-gray-600 dark:text-gray-300">
								50+ Client Testimonials
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
