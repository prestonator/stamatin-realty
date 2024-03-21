"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LuArrowDown } from "react-icons/lu";
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
import MapView from "./MapView";

const Hero = () => {
	return (
		<section
			className="px-4 py-48 bg-blend-multiply"
			style={{
				backgroundImage: `url(/HeroImages/aboutHero.webp)`,
				backgroundSize: "cover",
				backgroundColor: "rgba(11, 10, 7, 0.7)",
				backgroundPositionY: "center",
			}}
		>
			<div className="relative flex flex-col items-center justify-center gap-4">
				<div>
					<h1 className="text-3xl font-bold text-center text-white">
						Welcome to Alex Stamatin&apos;s Listings
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
	const [searchFilter, setSearchFilter] = useState("");
	const [typeFilter, setTypeFilter] = useState("All");
	const [priceFilter, setPriceFilter] = useState("All");
	const [bedroomFilter, setBedroomFilter] = useState("All");
	const [bathroomFilter, setBathroomFilter] = useState("All");
	const [sizeFilter, setSizeFilter] = useState("All");

	const filterProperties = (property) => {
		if (
			searchFilter &&
			!Object.values(property.location).some((value) =>
				value.toString().toLowerCase().includes(searchFilter.toLowerCase())
			)
		)
			return false;

		if (typeFilter !== "All" && property.type !== typeFilter) return false;

		if (priceFilter !== "All") {
			let minPrice = 0,
				maxPrice = Infinity;

			if (priceFilter !== "$400K +") {
				if (priceFilter === "$100k - $200k") {
					minPrice = 100000;
					maxPrice = 200000;
				} else if (priceFilter === "$200K - $300K") {
					minPrice = 200000;
					maxPrice = 300000;
				} else if (priceFilter === "$300K - $400K") {
					minPrice = 300000;
					maxPrice = 400000;
				}
			} else {
				minPrice = 400000;
			}

			if (property.list_price < minPrice || property.list_price >= maxPrice)
				return false;
		}

		if (
			bedroomFilter !== "All" &&
			property.description.bed_count < parseInt(bedroomFilter)
		)
			return false;

		if (
			bathroomFilter !== "All" &&
			property.description.bath_count < parseFloat(bathroomFilter)
		)
			return false;

		if (sizeFilter !== "All") {
			let minSize = 0,
				maxSize = Infinity;

			if (sizeFilter === "< 1,000 sqft") {
				maxSize = 1000;
			} else if (sizeFilter.includes("+")) {
				// for 4000+ sqft
				minSize = parseInt(
					sizeFilter.replace(",", "").replace("+ sqft", "").trim()
				);
			} else {
				// for ranges e.g. "1,000 - 2,000 sqft"
				[minSize, maxSize] = sizeFilter
					.split(" - ")
					.map((sqft) =>
						parseInt(sqft.replace(",", "").replace(" sqft", "").trim())
					);
			}

			if (
				property.description.sqft < minSize ||
				property.description.sqft >= maxSize
			)
				return false;
		}

		return true;
	};

	const filteredProperties = propertyDetails.filter(filterProperties);

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
								value={searchFilter}
								onChange={(e) => setSearchFilter(e.target.value)}
							/>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button className="w-full md:w-auto" variant="outline">
										Property Type
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem onClick={() => setTypeFilter("Home")}>
										Houses
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTypeFilter("Apartments")}>
										Apartments
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTypeFilter("Condos")}>
										Condos
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Price Range</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem
										onClick={() => setPriceFilter("$100k - $200k")}
									>
										$100k - $200k
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setPriceFilter("$200K - $300K")}
									>
										$200K - $300K
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setPriceFilter("$300K - $400K")}
									>
										$300K - $400K
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setPriceFilter("$400K +")}>
										$400K +
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Bedrooms</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem
										onClick={() => setBedroomFilter("1 Bedroom")}
									>
										1 Bedroom
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setBedroomFilter("2 Bedrooms")}
									>
										2 Bedrooms
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setBedroomFilter("3+ Bedrooms")}
									>
										3+ Bedrooms
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Bathrooms</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem
										onClick={() => setBathroomFilter("1 Bathroom")}
									>
										1 Bathroom
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setBathroomFilter("2 Bathrooms")}
									>
										2 Bathrooms
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setBathroomFilter("3+ Bathrooms")}
									>
										3+ Bathrooms
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Property Size</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem
										onClick={() => setSizeFilter("< 1,000 sqft")}
									>
										&lt; 1,000 sqft
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setSizeFilter("1,000 - 2,000 sqft")}
									>
										1,000 - 2,000 sqft
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setSizeFilter("2,000 - 3000 sqft")}
									>
										2,000 - 3000 sqft
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setSizeFilter("3,000 - 4,000 sqft")}
									>
										3,000 - 4,000 sqft
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setSizeFilter("4,000+ sqft")}
									>
										4,000+ sqft
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div
							className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
							id="listings"
						>
							{filteredProperties.map((property) => (
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
								<MapView filteredProperties={filteredProperties} />
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
