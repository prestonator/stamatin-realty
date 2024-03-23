"use client";
import { useState } from "react";
import FormInput from "./parts/Input";
import FormSelect from "./parts/Select";
import FormTextarea from "./parts/Textarea";
import FormButton from "./parts/Button";
import { Form, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "@/lib/yup";

const ContactForm = () => {
	// State to manage loading and error states
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission status

	const methods = useForm({
		mode: "onTouched",
		resolver: yupResolver(contactFormSchema),
		defaultValues: contactFormSchema || {
			name: "",
			email: "",
			phone: "",
			source: "",
			message: "",
		},
	});

	const { handleSubmit } = methods;

	// Improved error handling in onSubmit
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		setSubmitError(null);

		try {
			const response = await fetch(
				"https://n8n.do.prestonator.com/webhook/12cd7931-872b-400f-a05b-177bf8181a86",
				{
					method: "POST",
					headers: {},
					body: JSON.stringify({ stepOne, stepTwo, stepThree }),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			// Handle success - you might want to redirect the user or show a success message
			console.log("Form submitted successfully");
			// If the request is successful, set isSubmitted to true
			setIsSubmitted(true);
		} catch (error) {
			console.error("Failed to submit the form:", error);
			setSubmitError(error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	// If the form has been submitted, show the "Thank You" message
	if (isSubmitted) {
		return (
			<section id="formSubmitted">
				<h1 className="mb-6 font-light text-center">Thank You!</h1>
				<p className="text-center">
					Your request has been received, and we will be in touch soon.
				</p>
			</section>
		);
	}

	return (
		<div className="w-full max-w-md p-6 mx-auto space-y-8 bg-gray-100 rounded-lg dark:bg-gray-800">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold text-center">Contact Us</h2>
				<p className="text-center text-gray-500 dark:text-gray-400">
					We&apos;d love to hear from you. Please fill out the form below and
					we&apos;ll get back to you as soon as possible.
				</p>
			</div>
			<FormProvider onSubmit={handleSubmit(onSubmit)} {...methods}>
				<div onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
					<div className="space-y-2">
						<FormInput label="Name" id="name" placeholder="Enter your name" />
					</div>
					<div className="space-y-2">
						<FormInput
							label="Email"
							id="email"
							placeholder="Enter your email"
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<FormInput
							label="Phone Number"
							id="phone"
							placeholder="Enter your phone number"
							type="tel"
						/>
					</div>
					<div className="space-y-2">
						<FormSelect
							label="Where did you hear about us?"
							id="source"
							placeholder="Select"
						/>
					</div>
					<div className="space-y-2">
						<FormTextarea
							maxLength={400}
							label="What is your message?"
							className="min-h-[100px]"
							id="message"
							placeholder="Enter your message"
						/>
					</div>
					<FormButton
						className="w-full"
						id="formSubmitButton"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Submitting..." : "Send Message"}
					</FormButton>
					{submitError && <p>Error: {submitError}</p>}
				</div>
			</FormProvider>
		</div>
	);
};

export default ContactForm;
