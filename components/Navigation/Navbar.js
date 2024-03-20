"use client";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const Navbar = () => {
	return (
		<>
			<Link className="relative flex h-20 w-36" href="#">
				<Image
					src="/kwlogo_trans.webp"
					alt="Keller Williams Logo"
					className="object-contain"
					fill
				/>
				<span className="sr-only">Acme Inc</span>
			</Link>
			<Sheet>
				<SheetTrigger asChild>
					<Button className="lg:hidden" size="icon" variant="outline">
						<LuMenu className="w-6 h-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link className="relative flex h-20 w-36" href="#">
						<Image
							src="/kwlogo_trans.webp"
							alt="Keller Williams Logo"
							className="object-contain bg-white"
							fill
						/>
						<span className="sr-only">Stamatin Realty</span>
					</Link>
					<div className="grid gap-6 py-6">
						<Link
							className="flex items-center w-full py-2 text-lg font-semibold"
							href="/"
						>
							Home
						</Link>
						<Link
							className="flex items-center w-full py-2 text-lg font-semibold"
							href="/listings"
						>
							Listings
						</Link>
						<Link
							className="flex items-center w-full py-2 text-lg font-semibold"
							href="/about"
						>
							About
						</Link>
						<Link
							className="flex items-center w-full py-2 text-lg font-semibold"
							href="/blog"
						>
							Blog
						</Link>
						<Link
							className="flex items-center w-full py-2 text-lg font-semibold"
							href="/contact"
						>
							Get in Touch
						</Link>
					</div>
				</SheetContent>
			</Sheet>
			<NavigationMenu className="hidden lg:flex">
				<NavigationMenuList className="gap-[1.5rem]">
					<NavigationMenuLink asChild>
						<Link
							className={`${styles.menuItem} inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md group h-9 w-max text-md`}
							href="/"
						>
							Home
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className={`${styles.menuItem} inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md group h-9 w-max text-md`}
							href="/listings"
						>
							Listings
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className={`${styles.menuItem} inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md group h-9 w-max text-md`}
							href="/about"
						>
							About
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className={`${styles.menuItem} inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md group h-9 w-max text-md`}
							href="/blog"
						>
							Blog
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className={`${styles.menuItem} inline-flex items-center justify-center px-4 py-2 font-medium transition-colors rounded-md group h-9 w-max text-md`}
							href="/contact"
						>
							Get in Touch
						</Link>
					</NavigationMenuLink>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
};

export default Navbar;
