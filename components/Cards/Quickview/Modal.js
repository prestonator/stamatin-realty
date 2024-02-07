import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	DialogTrigger,
	DialogTitle,
	DialogHeader,
	DialogContent,
	Dialog,
} from "@/components/ui/dialog";
import {
	CarouselItem,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	Carousel,
} from "@/components/ui/carousel";
import {
	LuBed,
	LuX,
	LuArrowLeft,
	LuArrowRight,
	LuBath,
	LuHome,
} from "react-icons/lu";

const QuickviewModal = ({ image, type, list_price, onClose }) => {
	return (
		<DialogContent className="p-4 bg-white rounded-lg shadow-inner md:p-6 dark:bg-gray-900">
			<DialogHeader>
				<div className="flex items-center justify-between">
					<DialogTitle className="text-purple-600 dark:text-purple-300">
						Property Quick View
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
			<div className="grid gap-4 md:gap-6">
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
						123 Main St, Anytown, USA
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="flex items-center gap-2">
						<LuBed className="w-4 h-4 text-purple-600 dark:text-purple-300" />
						<span className="text-gray-700 dark:text-gray-300">3 Beds</span>
					</div>
					<div className="flex items-center gap-2">
						<LuBath className="w-4 h-4 text-purple-600 dark:text-purple-300" />
						<span className="text-gray-700 dark:text-gray-300">2 Baths</span>
					</div>
					<div className="flex items-center gap-2">
						<LuHome className="w-4 h-4 text-purple-600 dark:text-purple-300" />
						<span className="text-gray-700 dark:text-gray-300">1,800 sqft</span>
					</div>
				</div>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					This charming 3-bedroom, 2-bathroom home is located in the heart of
					Anytown. With 1,800 square feet of living space, this property is
					perfect for families or individuals looking for a spacious and
					comfortable home.
				</p>
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
