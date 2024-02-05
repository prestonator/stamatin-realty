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
import PropertyCard from "../Cards/PropertyCard/PropertyCard";
import propertyDetails from "@/data/propertyDetails.json";



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
				{propertyDetails.map((property, index) => (
					<SwiperSlide key={index}>
						<PropertyCard key={property.property_id} property={property} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
