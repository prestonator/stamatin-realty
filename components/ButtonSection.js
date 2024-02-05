"use client";
import React, { useState, useEffect } from "react";
import DetailFetchButton from "@/features/components/DetailFetchButton";
import agentListings from "@/data/agentListings.json";

const ButtonSection = () => {
	// Assuming propertyList is fetched or imported here
	const [propertyList, setPropertyList] = useState([]);

	// Set the property list with the imported JSON data
	useEffect(() => {
		setPropertyList(agentListings);
	}, []);

	return (
		<div>
			<h1>Property Details</h1>
			<DetailFetchButton propertyList={propertyList} />
		</div>
	);
};

export default ButtonSection;
