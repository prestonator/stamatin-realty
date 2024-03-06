import Link from "next/link";
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin } from "react-icons/lu";

const Footer = ({}) => {
	return (
		<>
			<div key="1" className="py-12 bg-gray-100">
				<div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Contact Us</h3>
						<hr className="w-3/4 mb-2 border-gray-300" />
						<p className="text-sm text-gray-500">
							3421 W Rock Creek Road Suite 110,
							<br />
							Norman, OK 73072
						</p>
						<p className="text-sm text-gray-500">
							<a href="tel:4052507303">(405) 250-7303</a>
						</p>
						<p className="text-sm text-gray-500">
							<a href="mailto:alex.stamatin@kw.com">alex.stamatin@kw.com</a>
						</p>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Follow Us</h3>
						<hr className="w-3/4 mb-2 border-gray-300" />
						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/alex.stamatin.9"
								target="_blank"
							>
								<LuFacebook className="w-6 h-6" />
							</a>
							<a
								href="https://www.instagram.com/alexstamatinrealty/"
								target="_blank"
							>
								<LuInstagram className="w-6 h-6" />
							</a>
							<a
								href="https://www.linkedin.com/in/alexander-stamatin-a281711b6/"
								target="_blank"
							>
								<LuLinkedin className="w-6 h-6" />
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-2 space-y-2">
						<h3 className="text-lg font-semibold">Quick Links</h3>
						<hr className="w-3/4 mb-2 border-gray-300" />
						<Link className="text-sm text-gray-500" href="#">
							Listings
						</Link>
						<Link className="text-sm text-gray-500" href="#">
							Open House
						</Link>
						<Link className="text-sm text-gray-500" href="#">
							About
						</Link>
						<Link className="text-sm text-gray-500" href="#">
							Contact
						</Link>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Schedule a Consultation</h3>
						<hr className="w-3/4 mb-2 border-gray-300" />
						<p className="text-sm text-gray-500">
							Ready to find your dream home? Click below to schedule a
							consultation with one of our experienced realtors.
						</p>
						<button className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded hover:bg-gray-700">
							Schedule Now
						</button>
					</div>
				</div>
				<div className="pt-8 mt-8 text-sm text-center text-gray-500 border-t">
					© 2024 Stamatin Realty. All rights reserved.
				</div>
			</div>
		</>
	);
};

export default Footer;
