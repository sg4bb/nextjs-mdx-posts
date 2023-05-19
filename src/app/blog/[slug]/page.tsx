import Time from "@/components/Time";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import ButtonBack from "@/components/ButtonBack";

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
    <>
      <h1 className="text-center text-2xl font-bold uppercase">{post.title}</h1>
      <div className="mb-8 text-center">
        <span className="text-gray-700">
          <Time date={post.date} />
        </span>
      </div>

      <MDXContent />

      <div className="mt-8 text-center">
        <ButtonBack>Volver</ButtonBack>
      </div>
    </>
  );
};

export default PostLayout;
