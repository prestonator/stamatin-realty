"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const NavbarClient = ({ children }) => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);
	return (
		<header
			className={`${styles.header} ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			} fixed flex items-center justify-between w-full h-20 px-4 shrink-0 md:px-6 transition-transform duration-300`}
		>{children}</header>
	);
};

export default NavbarClient;
