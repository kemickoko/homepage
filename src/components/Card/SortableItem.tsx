import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export const SortableItem: React.FC<Props> = ({ id, title, description, link }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-white rounded-lg shadow p-4 touch-none cursor-grab select-none"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {link && (
        <a href={link} className="text-blue-500 underline text-sm mt-2 inline-block">
          詳細を見る
        </a>
      )}
    </div>
  );
};