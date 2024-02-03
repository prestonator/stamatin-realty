"use client";
import { useState } from "react";
import Image from "next/image";
import {
	LuBed,
	LuBath,
	LuCar,
	LuRuler,
	LuCamera,
	LuStar,
} from "react-icons/lu";
import QuickviewModal from "./Modal";

const CardTop = ({ image, howRecent, imageCount }) => {
	return (
		<div className="relative">
			<Image
				alt="Property"
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
				<span className="ml-1 text-gray-700">5</span>
			</div>
		</div>
	);
};

const CardMiddle = ({
	listingPrice,
	propertyType,
	streetAdress,
	cityStateZip,
}) => {
	return (
		<>
			<div className="flex items-baseline justify-between">
				<h3 className="text-xl font-semibold">{listingPrice}</h3>
				<div className="transition-colors font-semibold text-xs py-0.5 px-2.5 bg-gray-300 border-transparent border rounded-full whitespace-nowrap items-center w-fit inline-flex focus:ring-offset-2 focus:ring-2 focus:outline-none">
					{propertyType}
				</div>
			</div>
			<h4 className="mt-2 font-medium text-gray-900">{streetAdress}</h4>
			<p className="text-gray-600">{cityStateZip}</p>
		</>
	);
};

const CardBottom = ({ bedrooms, bathrooms, parkingSpaces, squareFootage }) => {
	return (
		<>
			<div className="grid grid-cols-4 gap-2 pt-4 pb-12">
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{bedrooms}</span>
					<hr className="w-3/4 my-1" />
					<LuBed className="w-6 h-6 text-gray-500" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{bathrooms}</span>
					<hr className="w-3/4 my-1" />
					<LuBath className="w-6 h-6 text-gray-500" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{parkingSpaces}</span>
					<hr className="w-3/4 my-1" />
					<LuCar className="w-6 h-6 text-gray-500" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{squareFootage}</span>
					<hr className="w-3/4 my-1" />
					<LuRuler className="w-6 h-6 text-gray-500" />
				</div>
			</div>
		</>
	);
};

const QuickviewCard = ({ image, ...props }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};
	return (
		<>
			<div
				className="relative max-w-sm overflow-hidden border rounded-lg shadow-sm bg-card"
				data-v0-t="card"
			>
				<CardTop image={image} />
				<div className="flex flex-col justify-between p-4">
					<div>
						<CardMiddle {...props} />
						<CardBottom {...props} />
					</div>
					<button
						onClick={toggleModal}
						className="absolute bottom-0 left-0 right-0 w-full px-4 py-2 font-bold text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-gray-300"
					>
						View Details
					</button>
				</div>
			</div>
			{isModalOpen && <QuickviewModal image={image} {...props} onClose={toggleModal} />}
		</>
	);
};

export default QuickviewCard;
