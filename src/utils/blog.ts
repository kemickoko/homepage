import matter from 'gray-matter';

const markdownFiles = import.meta.glob('../content/posts/*.md', { as: 'raw', eager: true });

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  content: string;
};

export const getAllPosts = (): BlogPostMeta[] => {
  return Object.entries(markdownFiles).map(([path, rawContent]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const { data, content } = matter(rawContent as string);
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      category: data.category || '未分類',
      content,
    };
  }).sort((a, b) => b.date.localeCompare(a.date)); // 新しい順
};

export const getPostBySlug = (slug: string): BlogPostMeta | undefined => {
  return getAllPosts().find(post => post.slug === slug);
};