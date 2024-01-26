"use client";
import { useState } from "react";
import Image from "next/image";
import QuickviewModal from "./Modal";

const QuickviewCard = ({ image, propertyTitle, propertyPrice }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return (
		<>
			<div
				className="rounded-lg border bg-white text-card-foreground shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
				data-v0-t="card"
			>
				<div className="flex flex-col space-y-1.5 p-6">
					<h3 className="text-2xl font-semibold leading-none tracking-tight">
						{propertyTitle}
					</h3>
					<p className="text-sm text-muted-foreground">{propertyPrice}</p>
				</div>
				<div className="p-6">
					<Image
						alt="Property"
						className="mx-auto aspect-[1/1] overflow-hidden rounded-t-xl object-cover"
						height={200}
						src={image}
						width={200}
					/>
				</div>
				<div className="flex items-center p-6">
					<button
						onClick={toggleModal}
						className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium transition-colors border rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground"
					>
						View Details
					</button>
				</div>
			</div>
			{isModalOpen && (
				<QuickviewModal
					image={image}
					propertyTitle={propertyTitle}
					propertyPrice={propertyPrice}
					onClose={toggleModal}
				/>
			)}
		</>
	);
};

export default QuickviewCard;
