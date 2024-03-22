// app/blog/[slug]/page.jsx
import { getDocuments, getDocumentBySlug } from "outstatic/server";
import markdownToHtml from "@/lib/markdownToHtml";
import { SafeHtml, formatDate } from "@/lib/utils";
import LatestPosts from "./parts/latestPosts";
import "./markdown.css";

export async function generateStaticParams() {
	const posts = getDocuments("posts", [
		"title",
		"author",
		"publishedAt",
		"slug",
		"coverImage",
		"description",
	]);

	const paths = posts.map((post) => ({
		slug: post.slug,
	}));

	return paths;
}

async function getSinglePost(params) {
	const post = getDocumentBySlug("posts", params.slug, [
		"title",
		"publishedAt",
		"slug",
		"author",
		"content",
		"coverImage",
	]);

	const content = await markdownToHtml(post.content || "");
	const date = SafeHtml(formatDate(post.publishedAt));

	return {
		...post,
		date,
		content,
	};
}

async function getAllPosts() {
	const posts = getDocuments("posts", [
		"title",
		"author",
		"publishedAt",
		"slug",
		"coverImage",
		"description",
	]);
	return posts;
}

export async function generateMetadata({ params }) {
	const blog = await getSinglePost(params);

	return {
		title: blog.title,
		description: blog.description,
	};
}

export default async function PostPage({ params }) {
	const singlePost = await getSinglePost(params);
	const allPosts = await getAllPosts();
	// notFound is a Next.js utility
	if (!singlePost) return notFound();
	// Pass the post contents to MDX
	return (
		<>
			<main className="flex flex-col items-center justify-center px-4 pt-6 md:px-6 lg:pt-16 md:pt-12 ">
				<div
					className="blogMainImage"
					style={{
						backgroundImage: `url("${singlePost.coverImage}")`,
					}}
				>
					<div className="blogGradient"></div>
					<div className="absolute bottom-0 left-0 p-4 text-white bg-black/50">
						<div className="flex space-x-2 text-sm">
							<span>Date</span>
							<span>{singlePost.date}</span>
						</div>
						<h1 className="text-4xl font-bold">{singlePost.title}</h1>
					</div>
					<div className="absolute bottom-0 right-0 p-4 text-white bg-black/50">
						<span className="text-sm">Written by {singlePost.author.name}</span>
					</div>
				</div>
				<article className="max-w-5xl mx-auto mt-8 prose-lg blogPost">
					{singlePost.content}
				</article>
			</main>
			<section className="flex flex-col items-center my-12">
				<h2 className="text-3xl font-bold text-center">See the Latest Posts</h2>
				<hr className="w-12 border-t-4 mt-2 mb-4 border-[--alex-color]" />
				<LatestPosts />
			</section>
		</>
	);
}
