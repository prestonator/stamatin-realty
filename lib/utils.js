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