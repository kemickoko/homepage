// 記事の型
export type Post = {
  title: string;
  tags: string[];
  category: string;
  content: string;
};

// 表示の時のslugと日付の型
export type PostWithMeta = Post & {
  slug: string;
  date: string;
};