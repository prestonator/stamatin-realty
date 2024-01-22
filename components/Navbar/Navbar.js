import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex items-center h-16 px-8 bg-transparent shadow-md lg:px-12">
            <Link className="w-[10vw] h-[5rem] relative" href="/" rel="ugc">
                <Image src="/kwlogo_trans.webp" alt="Keller Williams Logo" className="object-contain" fill />
            </Link>
            <nav className="flex gap-4 ml-auto sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/" rel="ugc">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/listings" rel="ugc">
                    Listings
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/open-houses" rel="ugc">
                    Open Houses
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about" rel="ugc">
                    About
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact" rel="ugc">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;