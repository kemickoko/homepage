import { useState, useMemo } from 'react';
import { getPosts } from '../data/blog/getPosts';
import { getAllTags } from '../data/blog/getAllTags';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = getPosts();
  const allTags = useMemo(() => getAllTags(), [posts]);

  // 複数タグ選択用の配列
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // タグの選択・解除を切り替える関数
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // 選択されたタグのいずれかを含む記事をフィルター
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;
    return posts.filter(post => 
      selectedTags.some(tag => post.tags.includes(tag))
    );
  }, [posts, selectedTags]);

  return (
    <main className="font-Kosugi max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ一覧</h1>

      {/* タグ一覧 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {/* すべて表示ボタン */}
        <button
          onClick={() => setSelectedTags([])}
          className={`px-3 py-1 rounded ${
            selectedTags.length === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          すべて表示
        </button>

        {/* 各タグボタン */}
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded ${
              selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* 記事一覧 */}
      <ul className="space-y-6">
        {filteredPosts.map(post => (
          <li
            key={post.slug}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date} / {post.category}</p>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-200 transition"
                >
                  #{tag}
                </span>
              ))}
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