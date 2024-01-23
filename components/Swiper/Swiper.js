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
import QuickviewCard from "../Cards/Quickview/Card";

export default function SwiperSlides() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				loop={true}
				modules={[Pagination]}
				className="pb-4 mySwiper"
			>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						propertyTitle="1234 Main St"
						propertyPrice="$123,456"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						propertyTitle="1234 Main St"
						propertyPrice="$123,456"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						propertyTitle="ur moms"
						propertyPrice="$69,420"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						propertyTitle="ur moms"
						propertyPrice="$69,420"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						propertyTitle="ur moms"
						propertyPrice="$69,420"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						propertyTitle="ur moms"
						propertyPrice="$69,420"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
