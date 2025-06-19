import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../utils/blog';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <p>記事が見つかりませんでした。</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400">{post.date} / {post.category}</p>
      <div className="flex gap-2 text-sm text-blue-400 my-2">
        {post.tags.map(tag => <span key={tag}>#{tag}</span>)}
      </div>
      <div className="prose prose-invert mt-6">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </main>
  );
};

export default BlogPost;