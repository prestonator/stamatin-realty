import Link from "next/link";
import Image from "next/image";
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin } from "react-icons/lu";

const Footer = ({}) => {
	return (
		<div className="text-gray-900 bg-gray-100">
			<div className="container px-6 py-12 mx-auto lg:py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center lg:items-start">
						<div className="relative h-32 mb-6 w-60">
							<Image
								alt="Realtor Logo"
								className="object-contain w-24 h-24"
								src="/kwlogo_trans.webp"
								fill
							/>
						</div>
						<p className="text-sm leading-relaxed text-center lg:text-left">
							Providing top-notch real estate services in the heart of the city.
							We are committed to helping you find your dream home.
						</p>
					</div>
					<div className="flex flex-col items-center lg:items-start">
						<h3
							className="mb-4 text-xl font-semibold"
							style={{
								color: "black",
							}}
						>
							Contact Us
						</h3>
						<div className="w-3/4 border-b-2 border-[#B40101] mb-4" />
						<p className="mb-2 text-sm">
							3421 W Rock Creek Rd Ste 110, Norman, OK 73072
						</p>
						<p className="mb-2 text-sm">Email: alex.stamatin@kw.com</p>
						<p className="text-sm">Phone: (405) 250-7303</p>
					</div>
					<div className="flex flex-col items-center lg:items-start">
						<h3
							className="mb-4 text-xl font-semibold"
							style={{
								color: "black",
							}}
						>
							Follow Us
						</h3>
						<div className="w-3/4 border-b-2 border-[#B40101] mb-4" />
						<div className="grid grid-cols-2 gap-4">
							<Link href="#">
								<LuFacebook className="w-8 h-8" />
							</Link>
							<Link href="#">
								<LuTwitter className="w-8 h-8" />
							</Link>
							<Link href="#">
								<LuInstagram className="w-8 h-8" />
							</Link>
							<Link href="#">
								<LuLinkedin className="w-8 h-8" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center lg:items-start">
						<h3
							className="mb-4 text-xl font-semibold"
							style={{
								color: "black",
							}}
						>
							Quick Links
						</h3>
						<div className="w-3/4 border-b-2 border-[#B40101] mb-4" />
						<Link className="mb-2 text-sm hover:underline" href="/">
							Home
						</Link>
						<Link className="mb-2 text-sm hover:underline" href="/listings">
							Listings
						</Link>
						<Link className="mb-2 text-sm hover:underline" href="/about">
							About
						</Link>
						<Link className="mb-2 text-sm hover:underline" href="/blog">
							Blog
						</Link>
						<Link className="text-sm hover:underline" href="/contact">
							Get in Touch
						</Link>
					</div>
				</div>
			</div>
			<div className="py-4 text-sm text-center bg-gray-200">
				© 2024 Realtor. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
