import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PlaceholderCard() {
	return (
		<div className="relative">
			<Link href="/listings">
				<Button className="px-12 py-24 font-bold text-gray-700 bg-gray-300 hover:bg-gray-700 hover:text-gray-300">
					View All Listings
				</Button>
			</Link>
		</div>
	);
}
