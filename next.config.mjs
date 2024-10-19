import withMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default nextConfig;
