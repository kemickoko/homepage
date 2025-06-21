import type { Post } from '../blogData';

export const post: Post = {
  title: 'ブログページを作成',
  tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Vercel'],
  category: '開発記録',
  content: `
ブログページを作成
- Markdownで表示できるようにしてみたよ
# 大見出し
## 中見出し
### 小見出し
[ポートフォリオ記録](/portfolio)
`,
};

export default post;