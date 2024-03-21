import { remark } from "remark";
import html from "remark-html";
import { SafeHtml } from "./utils";

export default async function markdownToHtml(markdown) {
	const resultRaw = await remark().use(html).process(markdown);
	const result = SafeHtml(resultRaw.toString());
	return result;
}
