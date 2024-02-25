import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 35.229956,
  lng: -97.482395
};

const MapView = ({ filteredProperties }) => (
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
				/>
			))}
		</GoogleMap>
	</LoadScript>
);

export default MapView;