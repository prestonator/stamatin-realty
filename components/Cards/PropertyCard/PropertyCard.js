import React from "react";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({ property }) => {
	const {
		property_id,
		type,
		status,
		externalLink,
		list_price,
		location,
		photos,
	} = property;

	return (
		<div className="property-card">
			<Link href={externalLink}>
				<Image
					src={photos[0].href}
					alt={`${type} for ${status}`}
					width={300}
					height={200}
					objectFit="cover"
				/>
			</Link>
			<div className="property-info">
				<h3>{type}</h3>
				<p>{location.street_number}</p>
				<p>{`$${list_price.toLocaleString()}`}</p>
				<Link href={externalLink}>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default PropertyCard;
