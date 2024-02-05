// @/utils/getPropertyDetails.js
import axios from "axios";
import { throttlePromises } from "./throttlePromises";

const axiosFetch = axios.create({
	baseURL: "https://realty-in-us.p.rapidapi.com/",
	headers: {
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
	},
});

export const getPropertyDetails = async (propertyList) => {
	// Creating funcs array: each function returns a promise from axiosFetch
	const funcs = propertyList.map(
		(property) => () =>
			axiosFetch
				.get("/properties/v3/detail", {
					params: {
						property_id: property.property_id,
					},
				})
				.then((response) => response.data)
	);

	// Use the throttle function, limiting to 5 requests per second
	const result = await throttlePromises(funcs, 5);

	return result;
};
