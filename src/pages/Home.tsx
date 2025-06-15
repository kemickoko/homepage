import React, { useState } from "react";
import { SortableList } from "../components/Card/SortableList";

type Item = {
  id: string;
  title: string;
  description: string;
  link: string;
};

const initialItems: Item[] = [
  {
    id: "1",
    title: "Todoアプリ",
    description: "ReactとFirebaseで作成したシンプルなTodoアプリ。",
    link: "https://example.com/todo",
  },
  {
    id: "2",
    title: "計算機アプリ",
    description: "JavaScriptで作ったWeb電卓。四則演算対応。",
    link: "https://example.com/calculator",
  },
  {
    id: "3",
    title: "ポートフォリオサイト",
    description: "このポートフォリオサイトそのもの。Vite + Tailwind CSS + DnD Kit。",
    link: "https://example.com/portfolio",
  },
];

export const Home: React.FC = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">こんにちは、kemickokoです！</h1>
          <p className="text-gray-700 text-lg">
            フロントエンドエンジニアを目指して日々学習中です。React、TypeScript、TailwindCSSを使ってWebアプリを作っています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">制作物</h2>
          <SortableList items={items} onChange={setItems} />
        </section>
      </main>
    </div>
  );
};