// app/listings/[property_id]/page.js
import propertyDetails from "@/data/propertyDetails.json";
import SimpleSlider from "./ImageCarousel";
import { LuBed, LuBath, LuCar, LuRuler } from "react-icons/lu";

export async function generateStaticParams() {
	// Map through your listings to create params for each property
	return propertyDetails.map((property) => ({
		property_id: property.property_id,
	}));
}

const Page = ({ params }) => {
	// Find the property that matches the property_id in params
	const property = propertyDetails.find(
		(p) => p.property_id === params.property_id
	);

	if (!property) {
		return <div>Property not found</div>;
	}

	const { street_number, city, state_code, postal_code } = property.location;

	const { list_price, photos, description } = property;

	const { bath_count, bed_count, garage_count, sqft, property_description } =
		description;

	return (
		<>
			<section className="pt-32">
				<div>
					<SimpleSlider photos={photos} />
				</div>
			</section>
			<section>
				<div>
					<h1>
						{street_number}{" "}
						<span>
							{city}, {state_code} {postal_code}
						</span>
					</h1>
					<p>${list_price.toLocaleString()}</p>
				</div>
			</section>
			<section>
				<h2>Home Details</h2>
				<div className="grid grid-cols-4 gap-2 pt-4 pb-12">
					<div className="flex flex-col items-center">
						<span className="block text-gray-700 text-md">{bed_count} Bed</span>
						<hr className="w-3/4 my-1" />
						<LuBed className="w-8 h-8 text-gray-500" />
					</div>
					<div className="flex flex-col items-center">
						<span className="block text-gray-700 text-md">
							{bath_count} Bath(s)
						</span>
						<hr className="w-3/4 my-1" />
						<LuBath className="w-8 h-8 text-gray-500" />
					</div>
					<div className="flex flex-col items-center">
						<span className="block text-gray-700 text-md">
							{garage_count} Parking Space
						</span>
						<hr className="w-3/4 my-1" />
						<LuCar className="w-8 h-8 text-gray-500" />
					</div>
					<div className="flex flex-col items-center">
						<span className="block text-gray-700 text-md">{sqft} sqft</span>
						<hr className="w-3/4 my-1" />
						<LuRuler className="w-8 h-8 text-gray-500" />
					</div>
				</div>
			</section>
			<section>
				<h2>What is around this property?</h2>
			</section>
			<section>
				<h2>Description</h2>
				<p>{property_description}</p>
			</section>
			<section>
				<h3>Similar Homes You May Like</h3>
			</section>
			<section>
				<h4>View on Realtor.com</h4>
			</section>
			<section>
				<h4>Connect with Alex Stamatin Now.</h4>
			</section>
		</>
	);
};

export default Page;
