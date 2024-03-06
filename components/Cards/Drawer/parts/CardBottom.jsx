import { LuBed, LuBath, LuCar, LuRuler } from "react-icons/lu";

const CardBottom = ({ description }) => {
	const { bath_count, bed_count, garage_count, sqft, lot_sqft } = description;
	return (
		<>
			<div className="grid grid-cols-4 gap-2 pt-4 pb-12">
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{bed_count}</span>
					<hr className="w-3/4 my-1" />
					<LuBed className="w-6 h-6 text-black" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{bath_count}</span>
					<hr className="w-3/4 my-1" />
					<LuBath className="w-6 h-6 text-black" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-gray-700">{garage_count}</span>
					<hr className="w-3/4 my-1" />
					<LuCar className="w-6 h-6 text-black" />
				</div>
				<div className="flex flex-col items-center">
					<span className="block text-sm text-black">{sqft || lot_sqft}</span>
					<hr className="w-3/4 my-1" />
					<LuRuler className="w-6 h-6 text-black" />
				</div>
			</div>
		</>
	);
};

export default CardBottom;