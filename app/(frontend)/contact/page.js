import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/Cards/ContactForm/ContactForm";

const Contact = () => {
	return (
		<main className="flex items-center justify-center py-48">
			<ContactForm />
		</main>
	);
};

export default Contact;
