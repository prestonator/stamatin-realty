import { Button } from "@/components/ui/button";
import { LuArrowDown } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section
			className="px-4 py-48 bg-blend-multiply"
			style={{
				backgroundImage: `url(/aboutHero.webp)`,
				backgroundSize: "cover",
				backgroundColor: "rgba(11, 10, 7, 0.7)",
				backgroundPositionY: "center",
			}}
		>
			<div className="relative flex flex-col items-center justify-center gap-4">
				<div>
					<h1 className="text-3xl font-bold text-center text-white">
						Welcome to John Doe&apos;s Listings
					</h1>
				</div>
				<div>
					<span className="block text-center text-white">
						Discover your dream home from our exclusive listings.
					</span>
				</div>
				<Link
					className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-white bg-gray-900 rounded-md shadow hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
					href="#listings"
				>
					View Listings
					<LuArrowDown className="w-5 h-5 ml-2" />
				</Link>
			</div>
		</section>
	);
};

const ListingsPage = () => {
	return (
		<main>
			<Hero />
			<section id="listings" className="px-4 py-8 md:px-6">
				<div className="grid gap-6 mb-4 md:grid-cols-5">
					<fieldset className="col-span-full md:col-span-1">
						<legend className="mb-2 font-semibold">Min Price</legend>
						<div className="grid gap-2">
							<select
								className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="min-price"
							>
								<option>Min Price</option>
								<option>$100,000</option>
								<option>$200,000</option>
								<option>$300,000</option>
								<option>$400,000</option>
								<option>$500,000</option>
							</select>
						</div>
					</fieldset>
					<fieldset className="col-span-full md:col-span-1">
						<legend className="mb-2 font-semibold">Max Price</legend>
						<div className="grid gap-2">
							<select
								className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="max-price"
							>
								<option>Max Price</option>
								<option>$500,000</option>
								<option>$600,000</option>
								<option>$700,000</option>
								<option>$800,000</option>
								<option>$900,000</option>
							</select>
						</div>
					</fieldset>
					<fieldset className="col-span-full md:col-span-1">
						<legend className="mb-2 font-semibold">Bedrooms</legend>
						<div className="grid gap-2">
							<select
								className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="bedrooms"
							>
								<option>Number of Bedrooms</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5+</option>
							</select>
						</div>
					</fieldset>
					<fieldset className="col-span-full md:col-span-1">
						<legend className="mb-2 font-semibold">Bathrooms</legend>
						<div className="grid gap-2">
							<select
								className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="bathrooms"
							>
								<option>Number of Bathrooms</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5+</option>
							</select>
						</div>
					</fieldset>
					<fieldset className="col-span-full md:col-span-1">
						<legend className="mb-2 font-semibold">Square Feet</legend>
						<div className="grid gap-2">
							<select
								className="w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="sqft"
							>
								<option>Square Feet</option>
								<option>500+</option>
								<option>1000+</option>
								<option>1500+</option>
								<option>2000+</option>
								<option>2500+</option>
							</select>
						</div>
					</fieldset>
				</div>
				<div className="flex justify-center w-full mb-4">
					<Button className="mr-2">Apply Filters</Button>
					<Button>Clear Filters</Button>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<Image
							alt="Property 1"
							className="object-cover w-full h-64"
							height={400}
							src="/1.webp"
							style={{
								aspectRatio: "500/400",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="p-4 bg-white dark:bg-gray-950">
							<h3 className="text-xl font-bold">$500,000</h3>
							<p className="text-sm text-gray-500">123 Main St, Springfield</p>
							<p className="text-sm text-gray-500">3 Beds, 2 Baths</p>
						</div>
					</div>
					<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<Image
							alt="Property 2"
							className="object-cover w-full h-64"
							height={400}
							src="/2.webp"
							style={{
								aspectRatio: "500/400",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="p-4 bg-white dark:bg-gray-950">
							<h3 className="text-xl font-bold">$750,000</h3>
							<p className="text-sm text-gray-500">456 Elm St, Springfield</p>
							<p className="text-sm text-gray-500">4 Beds, 3 Baths</p>
						</div>
					</div>
					<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<Image
							alt="Property 3"
							className="object-cover w-full h-64"
							height={400}
							src="/3.webp"
							style={{
								aspectRatio: "500/400",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="p-4 bg-white dark:bg-gray-950">
							<h3 className="text-xl font-bold">$600,000</h3>
							<p className="text-sm text-gray-500">789 Oak St, Springfield</p>
							<p className="text-sm text-gray-500">3 Beds, 2 Baths</p>
						</div>
					</div>
					<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<Image
							alt="Property 4"
							className="object-cover w-full h-64"
							height={400}
							src="/4.webp"
							style={{
								aspectRatio: "500/400",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="p-4 bg-white dark:bg-gray-950">
							<h3 className="text-xl font-bold">$800,000</h3>
							<p className="text-sm text-gray-500">321 Pine St, Springfield</p>
							<p className="text-sm text-gray-500">4 Beds, 3 Baths</p>
						</div>
					</div>
					<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<Image
							alt="Property 1"
							className="object-cover w-full h-64"
							height={400}
							src="/5.webp"
							style={{
								aspectRatio: "500/400",
								objectFit: "cover",
							}}
							width={500}
						/>
						<div className="p-4 bg-white dark:bg-gray-950">
							<h3 className="text-xl font-bold">$500,000</h3>
							<p className="text-sm text-gray-500">123 Main St, Springfield</p>
							<p className="text-sm text-gray-500">3 Beds, 2 Baths</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ListingsPage;