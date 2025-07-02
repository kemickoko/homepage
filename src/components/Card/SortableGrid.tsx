import { SortableItem } from './SortableItem';

type Item = {
  id: string;
  title: string;
  description: string;
  link: string;
  github?: string;
};

type Props = {
  items: Item[];
};

export const SortableGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
      {items.map(item => (
        <SortableItem
          key={item.id}
          id={item.id}
          className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-md p-6 transition-shadow hover:shadow-2xl"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
          {item.link && (
            <a
              href={item.link}
              className="text-indigo-500 font-medium hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              詳細を見る →
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              className="text-gray-500 hover:underline text-sm block mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
        </SortableItem>
      ))}
      
    </div>
  );
};