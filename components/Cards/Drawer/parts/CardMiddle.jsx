const CardMiddle = ({ list_price, type, location }) => {
	const { street_number, city, state_code, postal_code } = location;
	return (
		<>
			<div className="flex items-baseline justify-between">
				<h3 className="text-xl font-semibold">{list_price}</h3>
				<div className="transition-colors font-semibold text-xs py-0.5 px-2.5 bg-gray-300 border-transparent border rounded-full whitespace-nowrap items-center w-fit inline-flex focus:ring-offset-2 focus:ring-2 focus:outline-none">
					{type}
				</div>
			</div>
			<h4 className="mt-2 font-medium text-gray-900">{street_number}</h4>
			<p className="text-gray-600">
				{city}, {state_code} {postal_code}
			</p>
		</>
	);
};

export default CardMiddle;