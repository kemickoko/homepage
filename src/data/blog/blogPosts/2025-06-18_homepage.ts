import type { Post } from '../blogData';

export const post: Post = {
  title: 'ホームページを作成しました。',
  tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Vercel'],
  category: '学習記録',
  content: `
### 個人開発勉強のため、ホームページを作成しました。

- [自己紹介](/about)ページ作成
- Vite + React + TypeScript + Tailwind で作成し、Vercel にデプロイ

👉 [ホーム画面に戻る](/)
`,
};

export default post;