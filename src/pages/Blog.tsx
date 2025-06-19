import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blog';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ一覧</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-300">{post.date} / {post.category}</p>
            <div className="mt-1 flex gap-2 text-xs text-blue-100">
              {post.tags.map(tag => <span key={tag}>#{tag}</span>)}
            </div>
            <Link to={`/blog/${post.slug}`} className="text-blue-300 underline">
              記事を読む
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;