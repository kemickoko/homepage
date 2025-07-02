import React, { useState } from 'react';
import { SortableProvider } from '../components/Card/SortableProvider';
import { SortableGrid } from '../components/Card/SortableGrid';
import type { WorkItem } from '../data/works/works';
import { initialWorks } from '../data/works/works';

export const Portfolio: React.FC = () => {
  const [works, setWorks] = useState<WorkItem[]>(initialWorks);

  return (
    <main className="font-Kosugi bg-gradient-to-r from-indigo-50 to-white min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 tracking-tight">
          制作物一覧
        </h2>
        <SortableProvider items={works} onChange={setWorks}>
          <SortableGrid items={works} />
        </SortableProvider>
      </section>
    </main>
  );
};