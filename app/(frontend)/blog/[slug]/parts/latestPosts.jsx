import { formatDate, SafeHtml } from "@/lib/utils";
import { getDocuments } from "outstatic/server";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

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

const LatestPosts = async() => {
	const allPosts = await getAllPosts();
	return (
		<div className="flex flex-wrap justify-center gap-4 px-4 py-6 mx-auto max-w-7xl">
			{allPosts.map((post) => (
				<div
					key={post.slug}
					className="flex flex-col w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 md:w-1/3 lg:w-1/4"
				>
					<div className="flex-shrink-0">
						<img
							alt="Blog post thumbnail"
							className="object-cover w-full h-48"
							height="200"
							src={post.coverImage}
							style={{
								aspectRatio: "400/200",
								objectFit: "cover",
							}}
							width="400"
						/>
					</div>
					<div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
						<div className="flex-1">
							<p className="text-sm font-medium text-[#B40101]">
								<a className="hover:underline" href="#">
									Article
								</a>
							</p>
							<Link className="block mt-2" href="#">
								<p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
									{post.title}
								</p>
								<p className="mt-3 text-base text-gray-500 dark:text-gray-400">
									{post.description}
								</p>
							</Link>
						</div>
						<div className="flex items-center mt-6">
							<div className="flex-shrink-0">
								<Link href="#">
									<span className="sr-only">{post.author.name}</span>
									<img
										alt=""
										className="w-10 h-10 rounded-full"
										height="40"
										src={post.author.picture}
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width="40"
									/>
								</Link>
							</div>
							<div className="ml-3">
								<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
									<Link className="hover:underline" href="#">
										{post.author.name}
									</Link>
								</p>
								<div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
									<time dateTime="2020-03-16">
										{SafeHtml(formatDate(post.publishedAt))}
									</time>
									<span aria-hidden="true">·</span>
									<span>6 min read</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default LatestPosts;
