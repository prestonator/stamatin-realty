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
						<p className="text-sm text-gray-500">1234 Main St, Anytown, USA</p>
						<p className="text-sm text-gray-500">(123) 456-7890</p>
						<p className="text-sm text-gray-500">info@realtorwebsite.com</p>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">Follow Us</h3>
						<hr className="w-3/4 mb-2 border-gray-300" />
						<div className="flex space-x-4">
							<Link href="#">
								<LuFacebook className="w-6 h-6" />
							</Link>
							<Link href="#">
								<LuTwitter className="w-6 h-6" />
							</Link>
							<Link href="#">
								<LuInstagram className="w-6 h-6" />
							</Link>
							<Link href="#">
								<LuLinkedin className="w-6 h-6" />
							</Link>
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
						<button className="w-full px-4 py-2 font-bold rounded bg-gray-900 text-white hover:bg-gray-700">
							Schedule Now
						</button>
					</div>
				</div>
				<div className="pt-8 mt-8 text-sm text-center text-gray-500 border-t">
					© 2024 Realtor Website. All rights reserved.
				</div>
			</div>
		</>
	);
};

export default Footer;
