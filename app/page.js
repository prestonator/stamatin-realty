import Image from "next/image";
import { GoSearch } from "react-icons/go";
import QuickviewCard from "@/components/Cards/Quickview/Card";
import SwiperSlides from "@/components/Swiper/Swiper";

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
		</main>
	);
}
