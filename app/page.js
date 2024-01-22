import Image from "next/image";
import { GoSearch } from "react-icons/go";
import QuickviewCard from "@/components/Cards/Quickview/Card";

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
			<section className="grid items-start gap-8 pt-32 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
				<QuickviewCard
					image="/alex.jpg"
					propertyTitle="1234 Main St"
					propertyPrice="$123,456"
				/>
				<QuickviewCard
					image="/alex.jpg"
					propertyTitle="1234 Main St"
					propertyPrice="$123,456"
				/>
				<QuickviewCard
					image="/alex.jpg"
					propertyTitle="ur moms"
					propertyPrice="$69,420"
				/>
				<QuickviewCard
					image="/alex.jpg"
					propertyTitle="ur moms"
					propertyPrice="$69,420"
				/>
				<QuickviewCard
					image="/alex.jpg"
					propertyTitle="ur moms"
					propertyPrice="$69,420"
				/>
			</section>
		</main>
	);
}
