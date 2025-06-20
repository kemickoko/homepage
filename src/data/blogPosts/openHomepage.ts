import type { Post } from '../blogData';

const openHomepagePost: Post = {
  slug: 'homepage',
  title: 'ホームページを作成しました。',
  date: '2025-06-18',
  tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Vercel'],
  category: '学習記録',
  content: `
個人開発勉強のため、ホームページを作成しました。

- [自己紹介](/about)
- Vite + React + TypeScript + Tailwind で作成し、Vercel にデプロイ

👉 [ホーム画面に戻る](/)
`,
};

export default openHomepagePost;