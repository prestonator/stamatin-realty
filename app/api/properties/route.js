// app/api/properties/route.js

import { getProperties } from "@/features/API/getProperties";
import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // Ensuring our handler runs in a Node.js environment

export async function POST() {
	const properties = await getProperties();

	// Define the path for the JSON file within the data directory
	const filePath = path.join(process.cwd(), "data", "agentListings.json");

	// Write the JSON file
	fs.writeFileSync(filePath, JSON.stringify(properties, null, 2), "utf-8");

	// Return a success response
	return new Response(JSON.stringify({ message: "Data saved successfully" }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
