"use client";
import React, { useState } from "react";
import {
	APIProvider,
	Map,
	Marker,
	InfoWindow,
	AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { BsHouse } from "react-icons/bs";

const center = {
	lat: 35.229956,
	lng: -97.482395,
};

const MapView = ({ filteredProperties }) => {
	const [selectedProperty, setSelectedProperty] = useState(null);
	const googleMapsApiKey = "AIzaSyALR2pJSTn_4ISX2KXwsOoWUTSOEVmJisw";
	const mapID = "d569390fab70022c";

	return (
		<APIProvider apiKey={googleMapsApiKey}>
			<Map
				style={{ width: "100%", height: "400px" }}
				defaultCenter={center}
				defaultZoom={10}
				mapId={mapID}
			>
				{filteredProperties.map((property) => (
					<AdvancedMarker
						key={property.property_id}
						position={{
							lat: property.location.latitude,
							lng: property.location.longitude,
						}}
						onClick={() => setSelectedProperty(property)}
					>
						<div className="px-2 py-1 transition-all bg-white rounded-lg shadow-lg opacity-80 hover:opacity-100">
							<p>${property.list_price.toLocaleString()}</p>
						</div>
					</AdvancedMarker>
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
			</Map>
		</APIProvider>
	);
};

export default MapView;
