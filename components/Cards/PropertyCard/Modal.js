import Image from "next/image";

const QuickviewModal = ({ image, type, list_price, onClose }) => {
	return (
		<div className="fixed inset-0 z-50 flex overflow-auto bg-smoke-light">
			<div className="relative flex flex-col w-full max-w-md p-8 m-auto bg-white rounded-lg">
				<Image
					alt="Property"
					className="object-cover w-full h-auto aspect-[3/2]"
					height={200}
					src={image}
					width={300}
				/>
				{/* Modal content here */}
				<h2>{type}</h2>
				<p>{list_price}</p>
				{/* Image, details, etc. */}
				<button
					onClick={onClose}
					className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium transition-colors border rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground"
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default QuickviewModal;
