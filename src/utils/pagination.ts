//validation of a number on the string
const isNumber = (value: string) => /^\d+$/.test(value);

export const getPagination = <T> (
  items: T[], 
  postPerPage = 2, 
  currentPage = "1"
  ) => {
  
  if (!isNumber(currentPage)) {
    throw new Error("Not a number");
  }

  const currentPageInt = parseInt(currentPage, 10);
  const totalPosts = items.length;
  const totalPages = Math.ceil(totalPosts / postPerPage);
  
  if(currentPageInt > totalPages) {
    throw new Error(`Page ${currentPage} does not exist`)
  }

  const offset = (currentPageInt - 1) * postPerPage;
  const currentPosts = items.slice(offset, offset + postPerPage);

  return {
    currentPosts,
    totalPages
  };
};
