const QuickviewModal = ({ image, propertyType, propertyPrice, onClose }) => {
	return (
		<div className="fixed inset-0 z-50 flex overflow-auto bg-smoke-light">
			<div className="relative flex flex-col w-full max-w-md p-8 m-auto bg-white rounded-lg">
				{/* Modal content here */}
				<h2>{propertyType}</h2>
				<p>{propertyPrice}</p>
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
