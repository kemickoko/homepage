import React, { useState } from "react";
import { SortableList } from "../components/Card/SortableList";

const Portfolio = () => {
  const [works, setWorks] = useState([
    {
      id: "todo",
      title: "Todoアプリ",
      description: "ReactとFirebaseで作成したTodo管理アプリ。",
      link: "https://your-todo.vercel.app",
    },
    {
      id: "calc",
      title: "計算機アプリ",
      description: "Vite + TypeScript製のシンプルな電卓。",
      link: "https://your-calc.vercel.app",
    },
    {
      id: "portfolio",
      title: "ポートフォリオ",
      description: "自己紹介と作品をまとめたページ。",
      link: "https://your-portfolio.vercel.app",
    },
  ]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">ドラッグで並び替え</h2>
      <SortableList items={works} onChange={setWorks} />
    </section>
  );
};

export default Portfolio;