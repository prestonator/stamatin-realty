import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	LuBed,
	LuBath,
	LuCar,
	LuRuler,
	LuCamera,
	LuStar,
} from "react-icons/lu";

const ListingCard = ({ property }) => {
	const {
		property_id,
		type,
		status,
		externalLink,
		list_price,
		location,
		photos,
		photo_count,
		description,
	} = property;

	const { street_number, city, state_code, postal_code } = location;
	const { bath_count, bed_count, garage_count, sqft, lot_sqft } = description;
	
	return (
		<>
			<div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
				<Link className="absolute inset-0 z-10" href="#">
					<span className="sr-only">View</span>
				</Link>
				<Image
					alt={`${type} for ${status}`}
					className="object-cover w-full h-64"
					height="400"
					src={photos[0].href}
					style={{
						aspectRatio: "500/400",
						objectFit: "cover",
					}}
					width="500"
				/>
				<div className="p-4 bg-white dark:bg-gray-950">
					<h3 className="text-xl">{street_number} </h3>
					<p className="text-sm text-gray-500">
						{city}, {state_code} {postal_code}
					</p>
					<h4 className="text-lg font-semibold md:text-xl">
						${list_price.toLocaleString()}
					</h4>
					<p className="text-sm text-gray-500">
						{bed_count} Bed | {bath_count} Bath | {sqft} sqft
					</p>
				</div>
			</div>
		</>
	);
};

export default ListingCard;
