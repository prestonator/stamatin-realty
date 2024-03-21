// app/blog/[slug]/page.jsx
import Link from "next/link";
import { getDocuments, getDocumentBySlug } from "outstatic/server";
import markdownToHtml from "@/lib/markdownToHtml";
import {
	Card,
	CardHeader,
	CardDescription,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
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

	return {
		...post,
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
	console.log(allPosts)
	// notFound is a Next.js utility
	if (!singlePost) return notFound();
	// Pass the post contents to MDX
	return (
		<main className="flex flex-col items-center justify-between px-4 py-32 pb-6 mx-auto max-w-7xl">
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
						<span>{singlePost.publishedAt}</span>
					</div>
					<h1 className="text-4xl font-bold">
						{singlePost.title}
					</h1>
				</div>
				<div className="absolute bottom-0 right-0 p-4 text-white bg-black/50">
					<span className="text-sm">Written by {singlePost.author.name}</span>
				</div>
			</div>
			<article>{singlePost.content}</article>
			<section className="mt-16">
				<h2 className="mb-6 text-3xl font-bold">Latest Blog</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{allPosts.map((post) => (
						<Link href={"/blog/" + post.slug} passHref key={post.slug}>
							<Card key={post.slug} className="w-full">
								<img
									alt="Eco-Friendly Living"
									className="object-cover w-full h-48"
									src={post.coverImage}
								/>
								<CardHeader className="p-4">
									<CardTitle className="text-lg font-semibold break-normal whitespace-normal">
										<div>{post.title}</div>
									</CardTitle>
									<CardDescription className="mt-2 text-sm">
										{post.description}
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
