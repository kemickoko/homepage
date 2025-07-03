import { getPosts } from './getPosts';

export const getAllTags = (): string[] => {
  const posts = getPosts();
  const tagSet = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
};