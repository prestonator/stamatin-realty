// app/api/propertyDetails/route.js

import fs from "fs";
import path from "path";
import { getPropertyDetails } from "@/features/API/getPropertyDetails";

export const runtime = "nodejs";

export async function POST(request) {
	const propertyList = await request.json(); // Assuming the property list is sent in the request body
	const detailedProperties = await getPropertyDetails(propertyList);

	// Selectively choosing keys to save
	const filteredDetails = detailedProperties.map((detail) => {
		// Checking if the photos array exists and has more than 10 photos
		const photos = detail?.data?.home?.photos;
		if (photos && photos.length > 10) {
			// Slice the array to keep only the first 10 photos
			detail.data.home.photos = photos.slice(0, 10);
		}

		// Update the photos array
		const updatedPhotos =
			photos?.map((photo) => {
				// Replace 's.jpg' with 'od.jpg' in the photo href
				const updatedHref = photo?.href?.replace("s.jpg", "od.jpg");
				return {
					__typename: photo?.__typename,
					href: updatedHref,
				};
			}) ?? [];

		// Construct the object with checks for undefined values
		return {
			property_id: detail?.data?.home?.property_id ?? "",
			listing_id: detail?.data?.home?.listing_id ?? "",
			type: detail?.data?.home?.__typename ?? "",
			status: detail?.data?.home?.status ?? "",
			externalLink: detail?.data?.home?.href ?? "",
			list_date: detail?.data?.home?.list_date ?? "",
			description: {
				type: detail?.data?.home?.description?.type ?? "",
				bath_count: detail?.data?.home?.description?.baths_consolidated ?? "",
				bed_count: detail?.data?.home?.description?.beds ?? "",
				garage_count: detail?.data?.home?.description?.garage ?? "",
				pool: detail?.data?.home?.description?.pool ?? "",
				sqft: detail?.data?.home?.description?.sqft ?? "",
				lot_sqft: detail?.data?.home?.description?.lot_sqft ?? "",
				unit_count: detail?.data?.home?.description?.units ?? "",
				story_count: detail?.data?.home?.description?.stories ?? "",
				property_styles: detail?.data?.home?.description?.styles ?? "",
				year_built: detail?.data?.home?.description?.year_built ?? "",
				name: detail?.data?.home?.description?.name ?? "",
				sub_type: detail?.data?.home?.description?.sub_type ?? "",
				property_description: detail?.data?.home?.description?.text ?? "",
			},
			list_price: detail?.data?.home?.list_price ?? 0,
			price_per_sqft: detail?.data?.home?.price_per_sqft ?? 0,
			open_houses: detail?.data?.home?.open_houses ?? [],
			location: {
				street_number: detail?.data?.home?.location?.address?.line ?? "",
				city:
					detail?.data?.home?.location?.address?.city === "Oklahoma City"
						? "OKC"
						: detail?.data?.home?.location?.address?.city ?? "",
				state_code: detail?.data?.home?.location?.address?.state_code ?? "",
				state: detail?.data?.home?.location?.address?.state ?? "",
				postal_code: detail?.data?.home?.location?.address?.postal_code ?? "",
				street_view_url: detail?.data?.home?.location?.street_view_url ?? "",
			},

			photo_count: updatedPhotos.length,
			photos: updatedPhotos,
			virtual_tours: detail?.data?.home?.virtual_tours ?? [],
			videos: detail?.data?.home?.videos ?? [],
			// Add any other keys you're interested in here
		};
	});

	const filePath = path.join(process.cwd(), "data", "propertyDetails.json");
	fs.writeFileSync(filePath, JSON.stringify(filteredDetails, null, 2), "utf-8");

	return new Response(
		JSON.stringify({ message: "Property details saved successfully" }),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}
