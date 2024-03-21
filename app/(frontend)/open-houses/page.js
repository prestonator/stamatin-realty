import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { LuClock4, LuCalendar } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section
			className="flex flex-col items-center px-4 py-48 space-y-4 text-center bg-blend-multiply"
			style={{
				backgroundImage: `url(/openHouseHero.webp)`,
				backgroundSize: "cover",
				backgroundColor: "rgba(11, 10, 7, 0.7)",
				backgroundPositionY: "center",
			}}
		>
			<div className="space-y-2 text-white">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
					Open Houses
				</h1>
				<p className="mx-auto max-w-[700px] md:text-xl">
					Explore upcoming open houses in your area.
				</p>
			</div>
			<div className="w-full max-w-sm space-y-2">
				<Select>
					<SelectTrigger className="h-auto">
						<SelectValue placeholder="Sort by" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="date">Date</SelectItem>
						<SelectItem value="location">Location</SelectItem>
						<SelectItem value="property-type">Property Type</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</section>
	);
};

const OpenHousesPage = () => {
	return (
		<main key="1">
			<Hero />
			<section className="container px-4 md:px-6">
				<div className="grid items-start gap-8 mx-auto mt-8 max-w-7xl sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
					<div className="relative grid gap-1 p-4 bg-white rounded-lg shadow-md">
						<div className="absolute top-0 left-0 px-2 py-1 text-xs text-gray-800 bg-green-200 rounded-md">
							Open House
						</div>
						<Image
							alt="Property 1"
							className="aspect-[7/5] overflow-hidden rounded-lg object-cover object-center"
							height="250"
							src="/1.webp"
							width="350"
						/>
						<h3 className="text-lg font-light">123 Main St, Anytown</h3>
						<div className="space-y-1">
							<p className="text-base font-semibold text-gray-700 dark:text-gray-300">
								<LuCalendar className="inline-block w-4 h-4 mr-1" />
								January 15, 2024
							</p>
							<p className="text-base font-semibold text-gray-700 dark:text-gray-300">
								<LuClock4 className="inline-block w-4 h-4 mr-1" />
								1:00 PM - 4:00 PM
							</p>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Charming 3-bedroom, 2-bath home in the heart of Anytown.
						</p>
					</div>
					<div className="relative grid gap-1 p-4 bg-white rounded-lg shadow-md">
						<div className="absolute top-0 left-0 px-2 py-1 text-xs text-gray-800 bg-green-200 rounded-md">
							Open House
						</div>
						<Image
							alt="Property 2"
							className="aspect-[7/5] overflow-hidden rounded-lg object-cover object-center"
							height="250"
							src="/2.webp"
							width="350"
						/>
						<h3 className="text-lg font-light">456 Elm St, Sometown</h3>
						<div className="space-y-1">
							<p className="text-base font-semibold text-gray-700 dark:text-gray-300">
								<LuCalendar className="inline-block w-4 h-4 mr-1" />
								January 16, 2024
							</p>
							<p className="text-base font-semibold text-gray-700 dark:text-gray-300">
								<LuClock4 className="inline-block w-4 h-4 mr-1" />
								10:00 AM - 1:00 PM
							</p>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Spacious 4-bedroom, 3-bath home with a large backyard.
						</p>
					</div>
					<div className="relative grid gap-1 p-4 bg-white rounded-lg shadow-md">
						<div className="absolute top-0 left-0 px-2 py-1 text-xs text-gray-800 bg-green-200 rounded-md">
							Open House
						</div>
						<Image
							alt="Property 3"
							className="aspect-[7/5] overflow-hidden rounded-lg object-cover object-center"
							height="250"
							src="/3.webp"
							width="350"
						/>
						<h3 className="text-lg font-light">789 Oak St, Othertown</h3>
						<div className="space-y-1">
							<p className="text-base font-semibold text-gray-700 dark:text-gray-300">
								<LuCalendar className="inline-block w-4 h-4 mr-1" />
								January 17, 2024
							</p>
							<p className="text-base font-semibold text-gray-700 dark:text-gray-300">
								<LuClock4 className="inline-block w-4 h-4 mr-1" />
								2:00 PM - 5:00 PM
							</p>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Modern 2-bedroom, 2-bath condo in a desirable location.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default OpenHousesPage;
