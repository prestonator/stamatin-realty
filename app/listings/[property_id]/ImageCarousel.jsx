"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = (props) => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	let sliderRef1 = useRef(null);
	let sliderRef2 = useRef(null);

	useEffect(() => {
		setNav1(sliderRef1);
		setNav2(sliderRef2);
	}, []);

	const settingsOne = {
		asNavFor: nav2,
		fade: true,
		arrows: false,
	};

	const settingsTwo = {
		slidesToShow: 5,
		slidesToScroll: 1,
		swipeToSlide: true,
		asNavFor: nav1,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
	};

	const { photos } = props;

	return (
		<div className="flex flex-col gap-4">
			<Slider
				asNavFor={nav2}
				ref={(slider) => (sliderRef1 = slider)}
				{...settingsOne}
			>
				{photos.map((photo) => (
					<div className="!flex justify-center" key={photo.href}>
						<Image
							placeholder="empty"
							className="object-cover aspect-[2/1] rounded-3xl"
							src={photo.href}
							alt="{photo.description}"
							width={1000}
							height={500}
						/>
					</div>
				))}
			</Slider>
			<Slider ref={(slider) => (sliderRef2 = slider)} {...settingsTwo}>
				{photos.map((photo) => (
					<div key={photo.href} className="">
						<Image
							placeholder="empty"
							className="rounded-2xl"
							src={photo.href}
							alt="{photo.description}"
							width={200}
							height={100}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SimpleSlider;
