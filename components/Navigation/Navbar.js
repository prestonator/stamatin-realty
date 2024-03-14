"use client";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="flex items-center justify-between w-full h-20 px-4 shrink-0 md:px-6">
			<Link className="relative flex h-20 w-36" href="#">
				<Image
					src="/kwlogo_trans.webp"
					alt="Keller Williams Logo"
					className="object-contain bg-white"
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
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="/"
						>
							Home
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="/listings"
						>
							Listings
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="/about"
						>
							About
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="/blog"
						>
							Blog
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="/contact"
						>
							Get in Touch
						</Link>
					</NavigationMenuLink>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};

const NavbarOld = () => {
	return (
		<NavigationMenu className="justify-between max-w-full">
			<div className="w-[10vw] h-[5rem] relative">
				<Image
					src="/kwlogo_trans.webp"
					alt="Keller Williams Logo"
					className="object-contain bg-white"
					fill
				/>
			</div>
			<NavigationMenuList className="text-xl gap-[1.5rem]">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()}`}
						>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/listings" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Listings
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/about" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							About
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="justify-self-end">
					<Link href="/blog" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Blog
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="justify-self-end">
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Get in Touch
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navbar;
