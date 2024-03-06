import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	DialogTitle,
	DialogHeader,
	DialogContent,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
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

const QuickviewDrawer = ({
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
		<DrawerContent className="flex flex-col px-8 bg-white rounded-lg shadow-inner md:p-6 dark:bg-gray-900">
			<DrawerHeader>
				<div className="flex items-center justify-between">
					<DrawerTitle className="text-[#B40101]">{street_number}</DrawerTitle>
					<div>
						<DrawerClose>
							<Button className="text-[#B40101]" size="icon" variant="ghost">
								<LuX className="w-4 h-4" />
							</Button>
						</DrawerClose>
					</div>
				</div>
			</DrawerHeader>
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
						<CarouselPrevious className="absolute p-2 text-[#B40101] transform -translate-y-1/2 rounded-full top-1/2 left-2 hover:bg-purple-200">
							<LuArrowLeft className="w-4 h-4" />
						</CarouselPrevious>
						<CarouselNext className="absolute p-2 text-[#B40101] transform -translate-y-1/2 rounded-full top-1/2 right-2 hover:bg-purple-200">
							<LuArrowRight className="w-4 h-4" />
						</CarouselNext>
					</Carousel>
				</div>
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-bold text-[#B40101]">{list_price}</h2>
					<p className="text-gray-500">
						{street_number}, {city}, {state_code} {postal_code}
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="flex items-center gap-2">
						<LuBed className="w-4 h-4 text-[#B40101]" />
						<span className="text-gray-700">{bed_count} Beds</span>
					</div>
					<div className="flex items-center gap-2">
						<LuBath className="w-4 h-4 text-[#B40101]" />
						<span className="text-gray-700">{bath_count} Baths</span>
					</div>
					<div className="flex items-center gap-2">
						<LuHome className="w-4 h-4 text-[#B40101]" />
						<span className="text-gray-700">{sqft || lot_sqft} sqft</span>
					</div>
				</div>
				<ScrollArea className="h-32 mt-2 overflow-auto border border-gray-200 rounded-md">
					<p className="p-2 text-sm text-gray-500">
						{property_description}
					</p>
				</ScrollArea>
				<Link href={`/listings/${property_id}`}>
					<Button
						className="w-full text-white bg-[#B40101] hover:bg-[#f76767]"
						variant="primary"
					>
						See More Details
					</Button>
				</Link>
			</div>
			<DrawerFooter className="pt-2">
				<DrawerClose asChild>
					<Button variant="outline">Cancel</Button>
				</DrawerClose>
			</DrawerFooter>
		</DrawerContent>
	);
};

export default QuickviewDrawer;
