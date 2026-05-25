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

export type BlogPaginationItem = number | 'ellipsis';

export function getCompactBlogPagination(currentPage: number, totalPages: number): BlogPaginationItem[] {
  if (totalPages <= 10) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, 2, totalPages - 1, totalPages]);

  for (let page = currentPage - 2; page <= currentPage + 2; page += 1) {
    if (page > 1 && page < totalPages) {
      pages.add(page);
    }
  }

  if (currentPage <= 5) {
    pages.add(2);
    pages.add(3);
    pages.add(4);
    pages.add(5);
    pages.add(6);
  }

  if (currentPage >= totalPages - 4) {
    pages.add(totalPages - 5);
    pages.add(totalPages - 4);
    pages.add(totalPages - 3);
    pages.add(totalPages - 2);
    pages.add(totalPages - 1);
  }

  const sortedPages = Array.from(pages).sort((a, b) => a - b);
  const pagination: BlogPaginationItem[] = [];

  sortedPages.forEach((page, index) => {
    const previousPage = sortedPages[index - 1];
    if (previousPage && page - previousPage > 1) {
      pagination.push('ellipsis');
    }
    pagination.push(page);
  });

  return pagination;
}

export function getBlogPaginationHtml(currentPage: number, totalPages: number) {
  const parts: string[] = [];

  parts.push(`<span class="blog-page-status">Pagina ${currentPage} din ${totalPages}</span>`);

  if (currentPage > 1) {
    parts.push(`<a class="blog-page-link blog-page-link-wide" href="${blogPageUrl(currentPage - 1)}" aria-label="Pagina anterioara">Inapoi</a>`);
  }

  getCompactBlogPagination(currentPage, totalPages).forEach((item) => {
    if (item === 'ellipsis') {
      parts.push('<span class="blog-page-ellipsis" aria-hidden="true">...</span>');
      return;
    }

    const activeClass = item === currentPage ? ' active' : '';
    const ariaCurrent = item === currentPage ? ' aria-current="page"' : '';
    parts.push(`<a class="blog-page-link${activeClass}" href="${blogPageUrl(item)}"${ariaCurrent}>${item}</a>`);
  });

  if (currentPage < totalPages) {
    parts.push(`<a class="blog-page-link blog-page-link-wide" href="${blogPageUrl(currentPage + 1)}" aria-label="Pagina urmatoare">Inainte</a>`);
  }

  return parts.join('');
}
