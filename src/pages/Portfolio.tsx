import { useState } from "react";
import { SortableList } from "../components/Card/SortableList";
import { initialWorks } from "../data/works/works";
import type { WorkItem } from "../data/works/works";


export const Portfolio: React.FC = () => {
  const [works, setWorks] = useState<WorkItem[]>(initialWorks);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">制作物</h2>
      <SortableList items={works} onChange={setWorks} />
    </section>
  );
};