import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Props = { id: string; children: React.ReactNode; className?: string; style?: React.CSSProperties };

export const SortableItem: React.FC<Props> = (({ id, children, className = '', style = {} }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const combinedStyle = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 150ms ease',
    touchAction: 'manipulation',
    zIndex: isDragging ? 50 : undefined,
    ...style,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={combinedStyle}
      className={`relative cursor-grab select-none ${className}`}
    >
      {children}
    </div>
  );
});