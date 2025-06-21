export type WorkItem = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export const initialWorks: WorkItem[] = [
  {
    id: "1",
    title: "ミニゲーム",
    description: "コインの合計金額を当てるミニゲーム",
    link: "https://coin-game-kappa.vercel.app/",
  },
  {
    id: "2",
    title: "制作物２",
    description: "制作物２",
    link: "2",
  },
  {
    id: "3",
    title: "制作物３",
    description: "制作物３",
    link: "3",
  },
  {
    id: "4",
    title: "制作物４",
    description: "制作物４",
    link: "4",
  },
];