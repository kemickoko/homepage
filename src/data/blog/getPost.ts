import { getPosts } from './getPosts';
import type { PostWithMeta } from './blogData';



export const getPostBySlug = (slug: string): PostWithMeta | undefined => {
  const posts = getPosts();
  return posts.find(post => post.slug === slug);
};