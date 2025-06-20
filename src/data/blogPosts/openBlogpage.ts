import type { Post } from '../blogData';

const blogpagePost: Post = {
  slug: 'portfolio',
  title: 'ブログページを作成',
  date: '2025-06-20',
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

export default blogpagePost;