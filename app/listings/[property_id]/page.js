// app/listings/[property_id]/page.js
import propertyDetails from "@/data/propertyDetails.json";

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

	return (
		<section>
			<div></div>
		</section>
	);
};

export default Page;
