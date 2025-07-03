import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../data/blog/getPostBySlug';

export const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <p>記事が見つかりませんでした。</p>;

  return (
    <main className="font-Kosugi max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400">
        {post.date} / {post.category}
      </p>
      <div className="flex gap-2 text-sm text-blue-400 my-2">
        {post.tags.map(tag => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <div className="prose mt-6">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children }) => (
              <a href={href} className="text-blue-400 underline hover:text-blue-600">
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </main>
  );
};