import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react"; // ドラッグハンドル用アイコン

type Item = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export const SortableItem = ({ id, title, description, link }: Item) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition ${
        isDragging ? "opacity-70 scale-105" : ""
      }`}
    >
      {/* ヘッダー部分（タイトルとハンドル） */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          {...attributes}
          {...listeners}
          className="p-2 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
          aria-label="ドラッグして並び替え"
        >
          <GripVertical size={20} />
        </button>
      </div>

      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 hover:underline"
      >
        サイトを見る →
      </a>
    </div>
  );
};