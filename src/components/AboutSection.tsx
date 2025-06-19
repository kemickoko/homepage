import { aboutData } from '../data/aboutData';
import CategoryList from './CategoryList';

const AboutSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{aboutData.title}</h2>

      {aboutData.paragraphs.map((text, index) => (
        <p key={index} className="mb-4">{text}</p>
      ))}

      <CategoryList title="習得技術" data={aboutData.skills} />
      <CategoryList title="資格" data={aboutData.qualifications} />
    </section>
  );
};

export default AboutSection;