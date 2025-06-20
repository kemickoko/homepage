import type { Post } from '../blogData';

const portfolioPost: Post = {
  slug: 'portfolio',
  title: 'React + Vite でポートフォリオサイトを作った話',
  date: '2025-06-18',
  tags: ['React', 'Vite'],
  category: '開発記録',
  content: `
Reactでポートフォリオサイトを作成し、Vercelにデプロイした記録です。
- Viteでセットアップ
- Tailwind CSSを使ってスタイリング
- Vercelでホスティング
`,
};

export default portfolioPost;