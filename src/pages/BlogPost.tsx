import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../data/blog/getPostBySlug';

export const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <p>記事が見つかりませんでした。</p>;

  return (
    <main className="font-Kosugi max-w-3xl w-full mx-auto px-4 py-8">
      <div className="prose mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400">
          {post.date} / {post.category}
        </p>
        <div className="flex flex-wrap gap-2 text-sm my-4">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-200 transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose mx-auto mt-6 border border-gray-300 rounded-xl p-6 shadow-sm bg-white">
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