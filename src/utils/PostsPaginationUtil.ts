import { allPosts } from "contentlayer/generated";

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postPerPage = 5;

export const totalPages = Math.ceil(totalPosts / postPerPage);

export const getPostPagination = (currentPage: number = 1) => {
  
  if(currentPage > totalPages) {
    throw new Error(`Page ${currentPage} does not exist`)
  }
  
  const offset = (currentPage - 1) * postPerPage;
  const currentPosts = posts.slice(offset, offset + postPerPage);

  return {
    currentPosts,
  };
};
