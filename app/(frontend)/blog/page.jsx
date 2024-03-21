import { getDocuments } from "outstatic/server";
import Link from "next/link";

async function getData() {
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

const BlogListings = async () => {
	const posts = await getData();
	return (
		<main className="flex flex-col pt-32">
			<h1 className="text-3xl font-bold">Posts by Alex Stamatin</h1>

			<section className="py-10">
				<h2 className="text-2xl font-bold">Latest Blogs</h2>

				<div className="py-2">
					{posts.map((post) => (
						<Link href={"/blog/" + post.slug} passHref key={post.slug}>
							<div className="flex justify-between gap-2 py-2 align-middle">
								<div>
									<h3 className="text-lg font-bold">{post.title}</h3>
									<p className="text-gray-400">{post.description}</p>
								</div>
								<div className="my-auto text-gray-400">
									<p>{post.publishedAt}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};

export default BlogListings;
