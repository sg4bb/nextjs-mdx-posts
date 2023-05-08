import { notFound } from "next/navigation";
import PostPagination from "@/components/PostPagination";
import PostsLists from "@/components/PostsLists";
import { getPostPagination, totalPages } from "@/utils/PostsPaginationUtil";

interface Props {
  params: {
    number: string;
  };
}

export const generateStaticParams = () => {
  return Array.from({ length: totalPages }).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts;

  try {
    if (!/^\d+$/.test(params.number)) {
      throw new Error("Not a number");
    }

    const currentPage = parseInt(params.number);
    arrayCurrentPosts = getPostPagination(currentPage).currentPosts;
  } catch (error) {
    notFound();
  }

  return (
    <>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        <PostsLists posts={arrayCurrentPosts} />

        {totalPages > 1 && (
          <PostPagination
            totalPages={totalPages}
            currentPage={parseInt(params.number)}
          />
        )}
      </div>
    </>
  );
};

export default LayoutPages;
