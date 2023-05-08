import React from "react";
import Time from "./Time";
import { Post } from "contentlayer/generated";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <>
      <article className="shadow-md p-4 rounded-md">
        <h3 className="text-2xl">
          <Link href={post.url}>{post.title}</Link>
        </h3>
        <Time date={post.date} />
      </article>
    </>
  );
};

export default PostItem;
