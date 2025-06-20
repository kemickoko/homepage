import { getPosts } from '../data/blogData';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = getPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ一覧</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li
            key={post.slug}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date} / {post.category}</p>
            <div className="mt-1 flex gap-2 text-xs text-blue-500">
              {post.tags.map(tag => <span key={tag}>#{tag}</span>)}
            </div>
            <Link to={`/blog/${post.slug}`} className="inline-block mt-2 text-blue-600 underline">
              記事を読む
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};