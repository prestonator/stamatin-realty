"use client";
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
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
			<NavigationMenuList className="text-lg gap-[1.5rem]">
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
