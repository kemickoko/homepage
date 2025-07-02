import { SortableItem } from './SortableItem';
import { LinkButton } from '../Button/LinkButton';

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
          <div className="mt-2 space-x-2">
            {item.link && (
              <LinkButton
                href={item.link}
                className="bg-indigo-500 hover:bg-indigo-600"
              >
                詳細を見る
              </LinkButton>
            )}
            {item.github && (
              <LinkButton
                href={item.github}
                className="bg-gray-600 hover:bg-gray-700"
              >
                GitHub
              </LinkButton>
            )}
          </div>
        </SortableItem>
      ))}
    </div>
  );
};