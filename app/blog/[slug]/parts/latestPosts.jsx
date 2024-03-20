import { Card, CardHeader, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const LatestPosts = () => {
	return (
		<section className="mt-16">
			<h2 className="mb-6 text-3xl font-bold">Latest Blog</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<Card className="w-full">
					<img
						alt="Eco-Friendly Living"
						className="object-cover w-full h-48"
						src="/placeholder.svg"
					/>
					<CardHeader className="p-4">
						<CardTitle className="text-lg font-semibold break-normal whitespace-normal">
							<div>
								Eco-Friendly Living: Sustainable Choices for a Greener Home
							</div>
						</CardTitle>
						<CardDescription className="mt-2 text-sm">
							Dive into the world of eco-friendly living. Explore sustainable
							products and lifestyle choices that make a positive impact.
						</CardDescription>
					</CardHeader>
					<CardFooter className="flex justify-between p-4">
						<span className="text-sm text-gray-500">9 Min</span>
						<span className="text-sm font-medium">
							Written by Darrell Steward
						</span>
					</CardFooter>
				</Card>
				<Card className="w-full">
					<img
						alt="The Comfort Zone"
						className="object-cover w-full h-48"
						src="/placeholder.svg"
					/>
					<CardHeader className="p-4">
						<CardTitle className="text-lg font-semibold break-normal whitespace-normal">
							<div>
								The Comfort Zone: Choosing the Perfect Furniture for Your Home
							</div>
						</CardTitle>
						<CardDescription className="mt-2 text-sm">
							From cozy couches to stylish tables, find the furniture that turns
							your house into a home. Discover the art of comfort.
						</CardDescription>
					</CardHeader>
					<CardFooter className="flex justify-between p-4">
						<span className="text-sm text-gray-500">6 Min</span>
						<span className="text-sm font-medium">Written by Devon Lane</span>
					</CardFooter>
				</Card>
				<Card className="w-full">
					<img
						alt="Bedroom Bliss"
						className="object-cover w-full h-48"
						src="/placeholder.svg"
					/>
					<CardHeader className="p-4">
						<CardTitle className="text-lg font-semibold break-normal whitespace-normal">
							<div>Bedroom Bliss: Creating a Relaxing Sanctuary</div>
						</CardTitle>
						<CardDescription className="mt-2 text-sm">
							Transform your bedroom into a peaceful retreat with our tips and
							recommendations. Explore the latest trends in bedroom design.
						</CardDescription>
					</CardHeader>
					<CardFooter className="flex justify-between p-4">
						<span className="text-sm text-gray-500">11 Min</span>
						<span className="text-sm font-medium">
							Written by Savannah Nguyen
						</span>
					</CardFooter>
				</Card>
			</div>
			<div className="flex justify-center mt-6 space-x-4">
				<LuArrowLeft className="w-6 h-6" />
				<LuArrowRight className="w-6 h-6" />
			</div>
		</section>
	);
};

export default LatestPosts;
