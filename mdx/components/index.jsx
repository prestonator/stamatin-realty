import NextImage from "next/image";
import { Code } from "bright";
import { MDXImage } from "./mdx-image";

Code.theme = {
	dark: "solarized-dark",
	light: "material-palenight",
	lightSelector: '[data-theme="light"]',
};

export const mdxComponents = {
	// TODO: re-enable once anchor tags are fixed in the app router
	// a: ({ children, ...props }) => {
	//   // check if external
	//   let isExternal = false;
	//   if (props.href?.startsWith('http')) {
	//     isExternal = true;
	//   }

	//   return (
	//     // @ts-expect-error legacy refs
	//     <Link
	//       {...props}
	//       href={props.href || ''}
	//       target={isExternal ? '_blank' : undefined}
	//       rel={isExternal ? 'noopener noreferrer' : undefined}
	//     >
	//       {children}
	//     </Link>
	//   );
	// },
	pre: ({ children, ...props }) => {
		return <Code {...props}>{children}</Code>;
	},
	img: MDXImage,
	Image: NextImage,
	Details: ({ children, summary, ...props }) => (
		// Necessary due to a hydration error I can't quite figure out
		<details {...props}>
			{summary && <summary>{summary}</summary>}
			{children}
		</details>
	),
};
