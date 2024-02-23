import Image from "next/image";
import {
	LuCamera,
	LuStar,
} from "react-icons/lu";

const CardTop = ({ image, photo_count, imageAlt }) => {
	return (
		<div className="relative">
			<Image
				alt={imageAlt}
				className="object-cover w-full h-auto aspect-[3/2]"
				height={200}
				src={image}
				width={300}
			/>
			<div className="absolute top-2 left-2">
				<LuStar className="w-6 h-6 text-white" />
			</div>
			<div className="absolute px-2 py-1 text-xs font-bold text-white uppercase bg-green-600 top-2 right-2">
				New
			</div>
			<div className="absolute flex items-center px-2 py-1 bg-white rounded-full bottom-2 right-2">
				<LuCamera className="w-6 h-6 text-gray-700" />
				<span className="ml-1 text-gray-700">{photo_count}</span>
			</div>
		</div>
	);
};

export default CardTop;