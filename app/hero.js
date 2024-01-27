"use client";
import ReactPlayer from "react-player";

const HeroVideo = () => {
	return (
		<section className="w-full h-[80vh] relative video-container">
			<ReactPlayer
				url="https://www.youtube.com/watch?v=FpeRrNr9YAc"
				playing
				loop
				muted
				width="100%"
				height="100%"
			/>
			<div className="absolute top-0 left-0 w-full h-full video-overlay">
				<div className="flex flex-col items-center justify-center h-full">
					<h1 className="pb-4">Title Goes Here</h1>
					<button>Click Me</button>
				</div>
			</div>
		</section>
	);
};

export default HeroVideo;
