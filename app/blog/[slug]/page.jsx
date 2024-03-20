// app/blog/[slug]/page.jsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { PostBody } from "@/mdx/post-body";
import { notFound } from "next/navigation";
import LatestPosts from "./parts/latestPosts";
import {
	Card,
	CardHeader,
	CardDescription,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
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

function getPosts() {
	// 1) Set blogs directory
	const blogDir = "blogs";

	// 2) Find all files in the blog directory
	const files = fs.readdirSync(path.join(blogDir));

	// 3) For each blog found
	const blogs = files.map((filename) => {
		// 4) Read the content of that blog
		const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

		// 5) Extract the metadata from the blog's content
		const { data: frontMatter } = matter(fileContent);

		// 6) Return the metadata and page slug
		return {
			meta: frontMatter,
			slug: filename.replace(".mdx", ""),
		};
	});
	return blogs;
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
	const blogs = getPosts();
	console.log(blogs);
	// notFound is a Next.js utility
	if (!props) return notFound();
	// Pass the post contents to MDX
	return (
		<main className="flex flex-col items-center justify-between px-4 py-32 pb-6 mx-auto max-w-7xl">
			<article>
				<PostBody>{props?.content}</PostBody>
			</article>
			<section className="mt-16">
				<h2 className="mb-6 text-3xl font-bold">Latest Blog</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{blogs.map((blog) => (
						<Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
							<Card key={blog.slug} className="w-full">
								<img
									alt="Eco-Friendly Living"
									className="object-cover w-full h-48"
									src={blog.meta.heroImage}
								/>
								<CardHeader className="p-4">
									<CardTitle className="text-lg font-semibold break-normal whitespace-normal">
										<div>{blog.meta.title}</div>
									</CardTitle>
									<CardDescription className="mt-2 text-sm">
										{blog.meta.description}
									</CardDescription>
								</CardHeader>
								<CardFooter className="flex justify-between p-4">
									<span className="text-sm text-gray-500">9 Min</span>
									<span className="text-sm font-medium">
										Written by Alex Stamatin
									</span>
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
