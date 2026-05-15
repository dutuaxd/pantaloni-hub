import { blogPosts } from './seoSite';

export const BLOG_POSTS_PER_PAGE = 9;
export const totalBlogPages = Math.max(1, Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE));

export function getBlogPage(pageNumber: number) {
  const currentPage = Math.min(Math.max(pageNumber, 1), totalBlogPages);
  const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  return {
    currentPage,
    posts: blogPosts.slice(start, start + BLOG_POSTS_PER_PAGE),
    totalPages: totalBlogPages,
  };
}

export function blogPageUrl(pageNumber: number) {
  return pageNumber === 1 ? '/blog/' : `/blog/page/${pageNumber}/`;
}
