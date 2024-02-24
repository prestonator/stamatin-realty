import { Button } from "@/components/ui/button";
import { LuArrowDown } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import propertyDetails from "@/data/propertyDetails.json";
import {
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import ListingCard from "./ListingCard";

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

const FilterMenu = () => {
	return (
		<div className="container px-4 py-6 mx-auto md:px-6 lg:px-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="col-span-1 md:col-span-2">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
							<Input
								className="flex-grow"
								placeholder="Search by keyword or address"
								type="text"
							/>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="w-full md:w-auto" variant="outline">
										Property Type
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>Houses</DropdownMenuItem>
									<DropdownMenuItem>Apartments</DropdownMenuItem>
									<DropdownMenuItem>Condos</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Price Range</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>$100k - $200k</DropdownMenuItem>
									<DropdownMenuItem>$200K - $300K</DropdownMenuItem>
									<DropdownMenuItem>$300K - $400K</DropdownMenuItem>
									<DropdownMenuItem>$400K +</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Bedrooms</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>1 Bedroom</DropdownMenuItem>
									<DropdownMenuItem>2 Bedrooms</DropdownMenuItem>
									<DropdownMenuItem>3+ Bedrooms</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Bathrooms</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>1 Bathroom</DropdownMenuItem>
									<DropdownMenuItem>2 Bathrooms</DropdownMenuItem>
									<DropdownMenuItem>3+ Bathrooms</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Property Size</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>&lt; 1,000 sqft</DropdownMenuItem>
									<DropdownMenuItem>1,000 - 2,000 sqft</DropdownMenuItem>
									<DropdownMenuItem>2,000 - 3000 sqft</DropdownMenuItem>
									<DropdownMenuItem>3,000 - 4,000 sqft</DropdownMenuItem>
									<DropdownMenuItem>4,000+ sqft</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div
							className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
							id="listings"
						>
							{propertyDetails.map((property) => (
								<ListingCard key={property.property_id} property={property} />
							))}
						</div>
					</div>
				</div>
				<div className="hidden col-span-1 md:block">
					<div className="sticky top-0">
						<Card>
							<CardContent className="p-4">
								<h3 className="mb-4 text-lg font-semibold">Map View</h3>
								<img
									alt="Map"
									className="object-cover w-full rounded-lg h-96"
									height={200}
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width={200}
								/>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

const ListingsPage = () => {
	return (
		<main>
			<Hero />
			<FilterMenu />
		</main>
	);
};

export default ListingsPage;
