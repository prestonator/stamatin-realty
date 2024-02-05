// components/DetailFetchButton.js
"use client";
import React from "react";

const DetailFetchButton = ({ propertyList }) => {
	const fetchDetails = async () => {
		await fetch("/api/propertyDetails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(propertyList),
		});
	};

	return <button onClick={fetchDetails}>Fetch Property Details</button>;
};

export default DetailFetchButton;
