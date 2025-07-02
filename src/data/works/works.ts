export type WorkItem = {
  id: string;
  title: string;
  description: string;
  link: string;
  github?: string;
};

export const initialWorks: WorkItem[] = [
  {
    id: "1",
    title: "ホームページ",
    description: "このサイトです",
    link: "https://homepage-xi-indol.vercel.app/",
    github: "https://github.com/kemickoko/homepage",
  },
  {
    id: "2",
    title: "ミニゲーム",
    description: "コインの合計金額を当てるミニゲーム",
    link: "https://coin-game-kappa.vercel.app/",
    github: "https://github.com/kemickoko/coin-game",
  },
  {
    id: "3",
    title: "制作物３",
    description: "制作物３",
    link: "3",
    github: "2",
  },
  {
    id: "4",
    title: "制作物４",
    description: "制作物４",
    link: "4",
    github: "2",
  },
];