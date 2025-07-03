import { aboutData } from '../data/about/aboutData';
import { CategoryList } from './CategoryList';
import ReactMarkdown from 'react-markdown';

/**
 * Aboutページのメインセクション。
 * 自己紹介のタイトル、説明（複数段落）、スキル・資格カテゴリを表示する。
 */

const AboutSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      {/* セクションタイトル */}
      <h2 className="text-2xl font-bold mb-4">{aboutData.title}</h2>

      {/* 段落データをMarkdownとしてレンダリング */}
      {aboutData.paragraphs.map((text, index) => (
        <ReactMarkdown
          key={index}
          components={{
            a: (props) => (
              <a
                {...props}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              />
            )
          }}
        >
          {text}
        </ReactMarkdown>
      ))}

      {/* 習得技術リストを表示 */}
      <CategoryList title="習得技術" data={aboutData.skills} />

      {/* 資格リストを表示 */}
      <CategoryList title="資格" data={aboutData.qualifications} />
    </section>
  );
};

export default AboutSection;