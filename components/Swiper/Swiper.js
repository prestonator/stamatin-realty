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
					}
				}}
			>
				<SwiperSlide>
					<QuickviewCard
						image="/1.jpg"
						streetAdress="123 Main St"
						cityStateZip="Norman, OK 73069"
						listingPrice="$425,000"
						propertyType="Office Space"
						bedrooms="2"
						bathrooms="2"
						parkingSpaces="2"
						squareFootage="1200"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/2.jpg"
						streetAdress="123 Main St"
						cityStateZip="Norman, OK 73069"
						listingPrice="$425,000"
						propertyType="Office Space"
						bedrooms="2"
						bathrooms="2"
						parkingSpaces="2"
						squareFootage="1200"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/3.jpg"
						streetAdress="123 Main St"
						cityStateZip="Norman, OK 73069"
						listingPrice="$425,000"
						propertyType="Office Space"
						bedrooms="2"
						bathrooms="2"
						parkingSpaces="2"
						squareFootage="1200"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/4.jpg"
						streetAdress="123 Main St"
						cityStateZip="Norman, OK 73069"
						listingPrice="$425,000"
						propertyType="Office Space"
						bedrooms="2"
						bathrooms="2"
						parkingSpaces="2"
						squareFootage="1200"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/5.jpg"
						streetAdress="123 Main St"
						cityStateZip="Norman, OK 73069"
						listingPrice="$425,000"
						propertyType="Office Space"
						bedrooms="2"
						bathrooms="2"
						parkingSpaces="2"
						squareFootage="1200"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<QuickviewCard
						image="/alex.jpg"
						streetAdress="123 Main St"
						cityStateZip="Norman, OK 73069"
						listingPrice="$425,000"
						propertyType="Office Space"
						bedrooms="2"
						bathrooms="2"
						parkingSpaces="2"
						squareFootage="1200"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
