export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  content: string;
};

// 一覧として export
const modules: Record<string, { default: Post }> = import.meta.glob('./blogPosts/*.ts', { eager: true });
console.log('モジュール一覧:', modules);
export const getPosts = (): Post[] =>
  Object.values(modules).map(module => module.default);