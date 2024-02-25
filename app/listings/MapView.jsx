"use client";
import React, { useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

const center = {
	lat: 35.229956,
	lng: -97.482395,
};

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
