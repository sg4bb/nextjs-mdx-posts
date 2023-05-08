import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number;
}

const PostPagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <div className="flex gap-4 justify-center">
      <Link
        href={`/pages/${currentPage - 1}`}
        style={{ display: currentPage !== 1 ? "block" : "none" }}
      >
        Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          href={`/pages/${index + 1}`}
          key={index}
          className={`${
            currentPage === index + 1
              ? "text-gray-600 pointer-events-none"
              : "text-blue-700"
          }`}
        >
          {index + 1}
        </Link>
      ))}

      <Link
        href={`/pages/${currentPage + 1}`}
        style={{ display: currentPage !== totalPages ? "block" : "none" }}
      >
        Next
      </Link>
    </div>
  );
};

export default PostPagination;
