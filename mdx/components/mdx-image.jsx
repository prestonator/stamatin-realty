import NextImage from "next/image";

export function MDXImage({ src, alt }) {
	let widthFromSrc, heightFromSrc;
	const url = new URL(src, "https://stamatinrealty.com");
	const widthParam = url.searchParams.get("w") || url.searchParams.get("width");
	const heightParam =
		url.searchParams.get("h") || url.searchParams.get("height");
	if (widthParam) {
		widthFromSrc = parseInt(widthParam);
	}
	if (heightParam) {
		heightFromSrc = parseInt(heightParam);
	}

	const imageProps = {
		src,
		alt,
		// tweak these to your liking
		height: heightFromSrc || 450,
		width: widthFromSrc || 550,
	};

	return <NextImage {...imageProps} />;
}
