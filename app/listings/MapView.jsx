"use client";
import React, { useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import { APIProvider } from "@vis.gl/react-google-maps";

const center = {
	lat: 35.229956,
	lng: -97.482395,
};

const googleMapsApiKey = process.env.MAPS_API_KEY;

const MapView = ({ filteredProperties }) => {
	const [selectedProperty, setSelectedProperty] = useState(null);

	return (
		<LoadScript googleMapsApiKey="AIzaSyALR2pJSTn_4ISX2KXwsOoWUTSOEVmJisw">
			<GoogleMap
				mapContainerStyle={{ width: "100%", height: "400px" }}
				center={center}
				zoom={10}
			>
				{filteredProperties.map((property) => (
					<Marker
						key={property.property_id}
						position={{
							lat: property.location.latitude,
							lng: property.location.longitude,
						}}
						onClick={() => setSelectedProperty(property)}
					/>
				))}

				{selectedProperty && (
					<InfoWindow
						position={{
							lat: selectedProperty.location.latitude,
							lng: selectedProperty.location.longitude,
						}}
						onCloseClick={() => setSelectedProperty(null)}
					>
						<div>
							<h2>{selectedProperty.description.bed_count} Bedroom Home</h2>
							<p>{selectedProperty.description.sqft} sqft</p>
							<p>${selectedProperty.list_price}</p>
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</LoadScript>
	);
};

export default MapView;
