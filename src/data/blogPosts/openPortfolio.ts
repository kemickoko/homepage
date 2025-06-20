import type { Post } from '../blogData';

const portfolioPost: Post = {
  slug: 'portfolio',
  title: 'ポートフォリオページを作成',
  date: '2025-06-18',
  tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Vercel'],
  category: '開発記録',
  content: `
Reactでポートフォリオページを作成
- 遊びでカード形式にして並び替えられるようにしてみたよ
- （並び変えたものを保存できるようにはしていない）
- [ポートフォリオ記録](/portfolio)
`,
};

export default portfolioPost;