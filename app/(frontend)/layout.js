import { Cormorant } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import NavbarClient from "@/components/Navigation/NavbarClient";
//import Navbar from "@/components/Navbar/Navbar";
//import NavbarClient from "@/components/Navbar/NavbarClient";
import Footer from "@/components/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

export const cormorant = Cormorant({
	subsets: ["latin"],
	variable: "--font-fancy",
	display: "swap",
});

export const metadata = {
	title: "Stamatin Realty",
	description: "The Only website for Stamatin Realty",
	icons: {
		icon: "/icons/favicon.ico",
		shortcut: "/icons/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					cormorant.variable
				)}
			>
				<NavbarClient>
					<Navbar />
				</NavbarClient>

				{children}
				<Footer />
			</body>
			<GoogleTagManager gtmId="GTM-WNGVFXLK" />
		</html>
	);
}
