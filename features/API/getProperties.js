import axios from "axios";
import fs from "fs/promises";
import path from "path";

const axiosFetch = axios.create({
	baseURL: "https://realty-in-us.p.rapidapi.com/",
	headers: {
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
	},
});

export const getProperties = async () => {
	const { data } = await axiosFetch.get("/agents/get-listings", {
		params: {
			fulfillment_id: "979662",
			id: "OKOK",
			agent_id: "150655",
			type: "forSale",
			page: "1",
		},
	});
	return data.data.forSale.results;
};

const getPropertyDetails = async () => {
	try {
		const properties = await getProperties(); // This calls your getProperties function from above
		const detailPromises = properties.map((property) => {
			// Destructure the needed parameters from each property
			const { property_id, listing_id } = property;
			return axiosFetch
				.get("/properties/v3/detail", {
					params: { property_id, listing_id },
				})
				.then((response) => response.data); // Return the detailed data
		});

		// Wait for all the detail calls to finish
		const detailedProperties = await Promise.all(detailPromises);

		// Now you have an array of detailed properties
		return detailedProperties;
	} catch (error) {
		console.error("Error fetching properties with details:", error);
		throw error;
	}
};
