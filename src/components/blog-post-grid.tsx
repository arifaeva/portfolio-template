import { Badge } from "@/components/badge";
import { BlogCard } from "@/components/blog-card";
import type { TMetadata } from "@/components/content-hub";

export type BlogPostGridProps = {
  metadatas: TMetadata[];
};

export const BlogPostGrid = (props: BlogPostGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3">
      {props.metadatas.map((metadata) => {
        const { title } = metadata;
        const tagCollection = metadata.tags.split(",");
        const date = metadata.date.replaceAll("/", " ");
        const url = `/blog/${metadata.url}`;

        return (
          <BlogCard key={title} url={url} date={date} title={title}>
            {tagCollection.map((tag) => (
              <Badge key={`${title}-${tag}`} variant="inactive" size="sm">
                {tag}
              </Badge>
            ))}
          </BlogCard>
        );
      })}
    </div>
  );
};
