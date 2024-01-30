"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import QuickviewCard from "../Cards/Quickview/CardNew";

// Data for the slides
const slidesData = [
	{
		image: "/1.jpg",
		streetAdress: "123 Main St",
		cityStateZip: "Norman, OK 73069",
		listingPrice: "$425,000",
		propertyType: "Office Space",
		bedrooms: "2",
		bathrooms: "2",
		parkingSpaces: "2",
		squareFootage: "1200",
	},
	{
		image: "/2.jpg",
		streetAdress: "2126 Melrose Court",
		cityStateZip: "Norman, OK 73069",
		listingPrice: "$245,000",
		propertyType: "Town Home",
		bedrooms: "2",
		bathrooms: "1.5",
		parkingSpaces: "2",
		squareFootage: "1200",
	},
];

export default function SwiperSlides() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				loop={true}
				modules={[Pagination]}
				className="mySwiper"
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
			>
				{slidesData.map((slide, index) => (
					<SwiperSlide key={index}>
						<QuickviewCard {...slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
