"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
	Drawer,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import QuickviewModal from "./parts/Modal";
import QuickviewDrawer from "./parts/Drawer";
import CardTop from "./parts/CardTop";
import CardMiddle from "./parts/CardMiddle";
import CardBottom from "./parts/CardBottom";

export function DrawerDialogDemo({ property }) {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const {
		property_id,
		type,
		status,
		externalLink,
		list_price,
		location,
		photos,
		photo_count,
		description,
	} = property;

	if (isDesktop) {
		return (
			<div className="relative max-w-sm overflow-hidden border rounded-lg shadow-md bg-card">
				<CardTop
					image={photos[0].href}
					photo_count={photo_count}
					imageAlt={`${type} for ${status}`}
				/>
				<div className="flex flex-col justify-between p-4">
					<div>
						<CardMiddle
							list_price={`$${list_price.toLocaleString()}`}
							type={type}
							location={location}
						/>
						<CardBottom description={description} />
					</div>
					<div>
						<Dialog open={open} onOpenChange={setOpen}>
							<DialogTrigger asChild>
								<Button className="absolute bottom-0 left-0 right-0 w-full px-4 py-2 font-bold text-gray-700 bg-gray-300 hover:bg-gray-700 hover:text-gray-300">
									Quick View
								</Button>
							</DialogTrigger>
							<QuickviewModal
								image={photos}
								type={type}
								list_price={`$${list_price.toLocaleString()}`}
								location={location}
								description={description}
								property_id={property_id}
							/>
						</Dialog>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative max-w-sm overflow-hidden border rounded-lg shadow-md bg-card">
			<CardTop
				image={photos[0].href}
				photo_count={photo_count}
				imageAlt={`${type} for ${status}`}
			/>
			<div className="flex flex-col justify-between p-4">
				<div>
					<CardMiddle
						list_price={`$${list_price.toLocaleString()}`}
						type={type}
						location={location}
					/>
					<CardBottom description={description} />
				</div>
			</div>
			<div>
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button className="absolute bottom-0 left-0 right-0 w-full px-4 py-2 font-bold text-gray-700 bg-gray-300 hover:bg-gray-700 hover:text-gray-300">
							Quick View
						</Button>
					</DrawerTrigger>
					<QuickviewDrawer
						image={photos}
						type={type}
						list_price={`$${list_price.toLocaleString()}`}
						location={location}
						description={description}
						property_id={property_id}
					/>
				</Drawer>
			</div>
		</div>
	);
}

function ProfileForm({ className }) {
	return (
		<form className={cn("grid items-start gap-4", className)}>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input type="email" id="email" defaultValue="shadcn@example.com" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="username">Username</Label>
				<Input id="username" defaultValue="@shadcn" />
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	);
}
