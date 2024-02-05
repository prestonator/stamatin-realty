// @/utils/getProperties.js
import axios from "axios";

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
	// Map through the results and extract listing_id and property_id
	const propertyIds = data.data.forSale.results.map((property) => ({
		listing_id: property.listing_id,
		property_id: property.property_id,
	}));
	return propertyIds;
};