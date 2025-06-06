import { join } from "node:path";
import { cwd } from "node:process";

import "@/styles/code-line-number.css";

import { readContent } from "@/utils/read-content";
import Link from "next/link";
import { getDoc } from "@/libs/get-doc";

export type SlugBlogProps = {
  params: {
    slug: string;
    number: number;
  };
};

export async function generateStaticParams() {
  const filenames = await readContent();
  return filenames.map((filename) => ({ slug: filename }));
}

export default async function SlugBlog({ params: { slug } }: SlugBlogProps) {
  const filePath = join(cwd(), "content", slug);
  const { content, frontmatter, estimateReadingTime } = await getDoc(filePath);

  return (
    <div className="prose prose-slate prose-lg mx-auto">
      <div className="text-neutral-500 text-base flex lg:flex-row flex-col gap-3 lg:justify-between lg:items-center mb-5">
        <Link
          href="/blog"
          className="flex items-center gap-1 text-neutral-500 no-underline hover:underline"
        >
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1.5L1.5 6.5L6.5 11.5"
              stroke="#747474"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <span>Return to Blog</span>
        </Link>
        <div className="flex lg:flex-row flex-col gap-1 lg:gap-3">
          <span>{estimateReadingTime}</span>
          <span className="lg:space-x-3 space-x-1">
            <span>&#x2022;</span> <span>{frontmatter.date}</span>
          </span>
        </div>
      </div>
      {content}
    </div>
  );
}
