// components/FetchButton.js
"use client";
import React from "react";

const FetchButton = () => {
	const fetchData = async () => {
		await fetch("/api/properties", {
			method: "POST",
		});
	};

	return (
		<button className="text-white bg-gray-800 rounded-lg" onClick={fetchData}>
			Fetch Properties and Save
		</button>
	);
};

export default FetchButton;
