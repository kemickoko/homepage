import type { Post } from '../blogData';

const djangoApiPost: Post = {
  slug: 'django-api',
  title: 'DjangoでAPIを作ってみた話',
  date: '2025-06-15',
  tags: ['Django', 'API'],
  category: '学習記録',
  content: `
Django REST Frameworkで簡単なAPIを作成した体験談です。
- シリアライザーの使い方
- APIViewとViewSetの違い
- 動作確認にPostmanを使用
`,
};

export default djangoApiPost;