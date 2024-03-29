import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	DialogTitle,
	DialogHeader,
	DialogContent,
	DialogClose,
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
	property_id,
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
					<DialogTitle className="text-gray-700 dark:text-purple-300">
						{street_number}
					</DialogTitle>
					<DialogClose asChild>
						<Button
							className="text-[#B40101] dark:text-purple-300"
							size="icon"
							variant="outline"
						>
							<LuX className="w-4 h-4" />
						</Button>
					</DialogClose>
				</div>
			</DialogHeader>
			<div className="flex flex-col gap-4 md:gap-6">
				<div>
					<Carousel>
						<CarouselContent>
							{image.map((item, index) => (
								<CarouselItem key={index}>
									<Image
										placeholder="empty"
										alt={`Property Image ${index + 1}`}
										className="w-full rounded-lg"
										height={200}
										src={item.href}
										width={300}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="absolute p-2 text-[#B40101] transform -translate-y-1/2 rounded-full top-1/2 left-2 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-700">
							<LuArrowLeft className="w-4 h-4" />
						</CarouselPrevious>
						<CarouselNext className="absolute p-2 text-[#B40101] transform -translate-y-1/2 rounded-full top-1/2 right-2 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-700">
							<LuArrowRight className="w-4 h-4" />
						</CarouselNext>
					</Carousel>
				</div>
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-bold text-gray-700 dark:text-purple-300">
						{list_price}
					</h2>
					<p className="text-gray-500 dark:text-gray-400">
						{street_number}, {city}, {state_code} {postal_code}
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="flex items-center gap-2">
						<LuBed className="w-4 h-4 text-[#B40101]" />
						<span className="text-gray-700 dark:text-gray-300">
							{bed_count} Beds
						</span>
					</div>
					<div className="flex items-center gap-2">
						<LuBath className="w-4 h-4 text-[#B40101]" />
						<span className="text-gray-700 dark:text-gray-300">
							{bath_count} Baths
						</span>
					</div>
					<div className="flex items-center gap-2">
						<LuHome className="w-4 h-4 text-[#B40101]" />
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
				<Link href={`/listings/${property_id}`}>
					<Button
						className="w-full text-white bg-[#B40101] hover:bg-[#F29CA3]"
						variant="primary"
					>
						See More Details
					</Button>
				</Link>
			</div>
		</DialogContent>
	);
};

export default QuickviewModal;
