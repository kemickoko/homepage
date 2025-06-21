import type { PostWithMeta } from './blogData';

// ファイル名例：2025-06-20_django-api.ts
const modules: Record<string, { default: PostWithMeta }> = import.meta.glob('./blogPosts/*.ts', {
  eager: true,
});

export const getPosts = (): PostWithMeta[] => {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const filename = path.split('/').pop()?.replace('.ts', '') || '';
      const [date, ...slugParts] = filename.split('_');
      const slug = slugParts.join('_');
      return {
        ...mod.default,
        date,
        slug,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // 新しい順にソート
};