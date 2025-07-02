import { aboutData } from '../data/about/aboutData';
import { CategoryList } from './CategoryList';
import ReactMarkdown from 'react-markdown';

const AboutSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{aboutData.title}</h2>

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

      <CategoryList title="習得技術" data={aboutData.skills} />
      <CategoryList title="資格" data={aboutData.qualifications} />
    </section>
  );
};

export default AboutSection;