/**
 * Yup schema validation objects for form steps.
 *
 * Exports 3 schema objects for validating each step of a multi-step form:
 *
 * - stepOneSchema: Validates required first name, last name, email and phone.
 *
 * - stepTwoSchema: Validates required day and time preferences.
 *
 * - stepThreeSchema: Validates required issue type, description, county,
 *   and agreement to terms.
 */
import * as yup from "yup";
import "yup-phone-lite";

export const contactFormSchema = yup.object().shape({
	name: yup.string().required("First Name is required"),
	email: yup
		.string()
		.email("Need to be a valid email")
		.required("Email is required"),
	phone: yup
		.string()
		.phone("US", "Please enter a valid phone number")
		.required("Phone is required"),
	source: yup
		.string()
		.required("Please provide a where you found us at!"),
	message: yup.string().required("Please enter a message!"),
});
