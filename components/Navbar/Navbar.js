import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
        <header className="flex items-center h-16 px-8 bg-transparent shadow-md lg:px-12">
            <a className="w-[10vw] h-[5rem] relative" href="./home.html" rel="ugc">
                <Image src="/kwlogo_trans.webp" alt="Keller Williams Logo" className="object-contain" fill />
            </a>
            <nav className="flex gap-4 ml-auto sm:gap-6">
                <a className="text-sm font-medium hover:underline underline-offset-4" href="./home.html" rel="ugc">
                    Home
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="./listings.html" rel="ugc">
                    Listings
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="./open-houses.html" rel="ugc">
                    Open Houses
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="./about.html" rel="ugc">
                    About
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="./contact.html" rel="ugc">
                    Contact
                </a>
            </nav>
        </header>
	);
};

export default Navbar;