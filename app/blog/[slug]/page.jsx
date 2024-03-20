// app/blog/[slug]/page.jsx
import getPosts, { getPost } from "@/lib/get-posts";
import { PostBody } from "@/mdx/post-body";
import { notFound } from "next/navigation";
import LatestPosts from "./parts/latestPosts";
import "./markdown.css";

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
	const post = await getPost(params.slug);
	// notFound is a Next.js utility
	if (!post) return notFound();
	// Pass the post contents to MDX
	return (
		<main className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl">
			<article>
				<PostBody>{post?.body}</PostBody>
			</article>
			<LatestPosts />
		</main>
	);
}
