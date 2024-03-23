import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
	return (
		<div className="w-full max-w-md p-6 mx-auto space-y-8 bg-gray-100 rounded-lg dark:bg-gray-800">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold text-center">Contact Us</h2>
				<p className="text-center text-gray-500 dark:text-gray-400">
					We&apos;d love to hear from you. Please fill out the form below and we&apos;ll
					get back to you as soon as possible.
				</p>
			</div>
			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input id="name" placeholder="Enter your name" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="Enter your email" type="email" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="phone">Phone Number</Label>
					<Input id="phone" placeholder="Enter your phone number" type="tel" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="source">Where did you hear about us?</Label>
					<Select id="source">
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="social_media">Social Media</SelectItem>
							<SelectItem value="friend">Friend</SelectItem>
							<SelectItem value="advertisement">Advertisement</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="message">Message</Label>
					<Textarea
						className="min-h-[100px]"
						id="message"
						placeholder="Enter your message"
					/>
				</div>
				<Button className="w-full">Send Message</Button>
			</div>
		</div>
	);
};

export default ContactForm;
