import Time from "@/components/Time";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  return {
    title: post?.title,
    description: post?.description,
  };
};

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    return notFound();
  } else {
    MDXContent = useMDXComponent(post.body.code);
  }

  return (
    <div className="container mt-20">
      <Link
        href="/posts"
        className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        Volver atras
      </Link>
      <h1 className="text-3xl text-center my-4">{post.title}</h1>
      <Time date={post.date} />
      <MDXContent />
    </div>
  );
};

export default PostLayout;
