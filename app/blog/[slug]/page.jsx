// app/blog/[slug]/page.jsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

import { PostBody } from "@/mdx/post-body";
import { notFound } from "next/navigation";
import LatestPosts from "./parts/latestPosts";
import "./markdown.css";

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join("blogs"));

	const paths = files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return paths;
}

function getPost({ slug }) {
	const markdownFile = fs.readFileSync(
		path.join("blogs", slug + ".mdx"),
		"utf-8"
	);

	const { data: frontMatter, content } = matter(markdownFile);

	return {
		frontMatter,
		slug,
		content,
	};
}

export async function generateMetadata({ params }) {
	const blog = getPost(params);

	return {
		title: blog.frontMatter.title,
		description: blog.frontMatter.description,
	};
}

export default async function PostPage({ params }) {
	const props = getPost(params);
	// notFound is a Next.js utility
	if (!props) return notFound();
	// Pass the post contents to MDX
	return (
		<main className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl">
			<article>
				<PostBody>{props?.content}</PostBody>
			</article>
			<LatestPosts />
		</main>
	);
}
