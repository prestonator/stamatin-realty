"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
	LuBed,
	LuBath,
	LuCar,
	LuRuler,
	LuCamera,
	LuStar,
} from "react-icons/lu";
import {
	DialogTrigger,
	DialogTitle,
	DialogHeader,
	DialogContent,
	Dialog,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QuickviewModal from "./Modal";

const CardTop = ({ image, photo_count, imageAlt }) => {
	return (
		<div className="relative">
			<Image
				alt={imageAlt}
				className="object-cover w-full h-auto aspect-[3/2]"
				height={200}
				src={image}
				width={300}
			/>
			<div className="absolute top-2 left-2">
				<LuStar className="w-6 h-6 text-white" />
			</div>
			<div className="absolute px-2 py-1 text-xs font-bold text-white uppercase bg-green-600 top-2 right-2">
				New
			</div>
			<div className="absolute flex items-center px-2 py-1 bg-white rounded-full bottom-2 right-2">
				<LuCamera className="w-6 h-6 text-gray-700" />
				<span className="ml-1 text-gray-700">{photo_count}</span>
			</div>
		</div>
	);
};

const CardMiddle = ({ list_price, type, location }) => {
	const { street_number, city, state_code, postal_code } = location;
	console.log(city);
	return (
		<>
			<div className="flex items-baseline justify-between">
				<h3 className="text-xl font-semibold">{list_price}</h3>
				<div className="transition-colors font-semibold text-xs py-0.5 px-2.5 bg-gray-300 border-transparent border rounded-full whitespace-nowrap items-center w-fit inline-flex focus:ring-offset-2 focus:ring-2 focus:outline-none">
					{type}
				</div>
			</div>
			<h4 className="mt-2 font-medium text-gray-900">{street_number}</h4>
			<p className="text-gray-600">
				{city}, {state_code} {postal_code}
			</p>
		</>
	);
};

const CardBottom = ({ description }) => {
	const { bath_count, bed_count, garage_count, sqft, lot_sqft } = description;
	return (
		<>
			<div className="grid grid-cols-4 gap-2 pt-4 pb-12">
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{bed_count}</span>
					<hr className="w-3/4 my-1" />
					<LuBed className="w-6 h-6 text-gray-500" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{bath_count}</span>
					<hr className="w-3/4 my-1" />
					<LuBath className="w-6 h-6 text-gray-500" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{garage_count}</span>
					<hr className="w-3/4 my-1" />
					<LuCar className="w-6 h-6 text-gray-500" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">
						{sqft || lot_sqft}
					</span>
					<hr className="w-3/4 my-1" />
					<LuRuler className="w-6 h-6 text-gray-500" />
				</div>
			</div>
		</>
	);
};

const PropertyCard = ({ property }) => {
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

	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return (
		<div className="relative max-w-sm overflow-hidden border rounded-lg shadow-sm bg-card">
			<CardTop
				image={photos[0].href}
				photo_count={photo_count}
				imageAlt={`${type} for ${status}`}
			/>
			<div className="flex flex-col justify-between p-4">
				<div>
					<CardMiddle
						list_price={`$${list_price.toLocaleString()}`}
						type={type}
						location={location}
					/>
					<CardBottom description={description} />
				</div>
				<div>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								className="absolute bottom-0 left-0 right-0 w-full px-4 py-2 font-bold text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-gray-300"
								variant="outline"
							>
								Quick View
							</Button>
						</DialogTrigger>
						<QuickviewModal
							image={photos}
							type={type}
							list_price={`$${list_price.toLocaleString()}`}
							onClose={toggleModal}
							location={location}
							description={description}
						/>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
