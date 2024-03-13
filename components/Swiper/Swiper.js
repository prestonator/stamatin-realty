"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import propertyDetails from "@/data/propertyDetails.json";
import { DrawerDialogDemo } from "@/components/Cards/Drawer/Card";


export default function SwiperSlides() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				grabCursor={true}

				navigation={true}
				modules={[Pagination, Navigation]}
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
						spaceBetween: 40,
					},
				}}
			>
				{propertyDetails.map((property, index) => (
					<SwiperSlide key={index}>
						<DrawerDialogDemo key={property.property_id} property={property} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
