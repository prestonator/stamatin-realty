import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	DialogTitle,
	DialogHeader,
	DialogContent,
} from "@/components/ui/dialog";
import {
	CarouselItem,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	Carousel,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	LuBed,
	LuX,
	LuArrowLeft,
	LuArrowRight,
	LuBath,
	LuHome,
} from "react-icons/lu";

const QuickviewModal = ({
	image,
	type,
	list_price,
	onClose,
	location,
	description,
}) => {
	const { street_number, city, state_code, postal_code } = location;
	const {
		bath_count,
		bed_count,
		garage_count,
		sqft,
		lot_sqft,
		property_description,
	} = description;
	return (
		<DialogContent className="flex flex-col p-4 bg-white rounded-lg shadow-inner md:p-6 dark:bg-gray-900">
			<DialogHeader>
				<div className="flex items-center justify-between">
					<DialogTitle className="text-purple-600 dark:text-purple-300">
						{street_number}
					</DialogTitle>
					<div>
						<Button
							className="text-purple-600 dark:text-purple-300"
							size="icon"
							variant="ghost"
						>
							<LuX className="w-4 h-4" />
							<span className="sr-only">Close</span>
						</Button>
					</div>
				</div>
			</DialogHeader>
			<div className="flex flex-col gap-4 md:gap-6">
				<div>
					<Carousel>
						<CarouselContent>
							{image.map((item, index) => (
								<CarouselItem key={index}>
									<Image
										alt={`Property Image ${index + 1}`}
										className="w-full rounded-lg"
										height={200}
										src={item.href}
										width={300}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="absolute p-2 text-purple-600 transform -translate-y-1/2 rounded-full top-1/2 left-2 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-700">
							<LuArrowLeft className="w-4 h-4" />
						</CarouselPrevious>
						<CarouselNext className="absolute p-2 text-purple-600 transform -translate-y-1/2 rounded-full top-1/2 right-2 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-700">
							<LuArrowRight className="w-4 h-4" />
						</CarouselNext>
					</Carousel>
				</div>
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-bold text-purple-600 dark:text-purple-300">
						{list_price}
					</h2>
					<p className="text-gray-500 dark:text-gray-400">
						{street_number}, {city}, {state_code} {postal_code}
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="flex items-center gap-2">
						<LuBed className="w-4 h-4 text-purple-600 dark:text-purple-300" />
						<span className="text-gray-700 dark:text-gray-300">
							{bed_count} Beds
						</span>
					</div>
					<div className="flex items-center gap-2">
						<LuBath className="w-4 h-4 text-purple-600 dark:text-purple-300" />
						<span className="text-gray-700 dark:text-gray-300">
							{bath_count} Baths
						</span>
					</div>
					<div className="flex items-center gap-2">
						<LuHome className="w-4 h-4 text-purple-600 dark:text-purple-300" />
						<span className="text-gray-700 dark:text-gray-300">
							{sqft || lot_sqft} sqft
						</span>
					</div>
				</div>
				<ScrollArea className="h-32 mt-2 overflow-auto border border-gray-200 rounded-md dark:border-gray-800">
					<p className="p-2 text-sm text-gray-500 dark:text-gray-400">
						{property_description}
					</p>
				</ScrollArea>
				<Button
					onClick={onClose}
					className="w-full text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-300 dark:hover:bg-purple-400"
					variant="primary"
				>
					Schedule a Viewing
				</Button>
			</div>
		</DialogContent>
	);
};

export default QuickviewModal;
