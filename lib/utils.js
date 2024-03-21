import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { sanitize } from "isomorphic-dompurify";
import parse from "html-react-parser";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const SafeHtml = (html) => {
	const cleanedHtml = sanitize(html);
	return parse(cleanedHtml);
};

export const formatDate = (dateStr) => {
	const date = new Date(dateStr);
	const formattedDate = date.toLocaleString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	// Add day suffix (st, nd, rd, th)
	const dayOfMonth = date.getDate();
	const getDaySuffix = (day) => {
		if (day > 3 && day < 21) {
			return "th";
		}
		const lastDigit = day % 10;
		return ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][
			lastDigit
		];
	};
	const daySuffix = getDaySuffix(dayOfMonth);

	return formattedDate.replace(
		dayOfMonth,
		`${dayOfMonth}<sup>${daySuffix}</sup>`
	);
};