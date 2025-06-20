import { useState } from "react";
import { SortableList } from "../components/Card/SortableList";

export const Portfolio: React.FC = () => {
  const [works, setWorks] = useState([
    {
      id: "1",
      title: "制作物１",
      description: "制作物１",
      link: "",
    },
    {
      id: "2",
      title: "制作物２",
      description: "制作物２",
      link: "",
    },
    {
      id: "3",
      title: "制作物３",
      description: "制作物３",
      link: "",
    },
    {
      id: "4",
      title: "制作物４",
      description: "制作物４",
      link: "",
    },
  ]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">制作物</h2>
      <SortableList items={works} onChange={setWorks} />
    </section>
  );
};