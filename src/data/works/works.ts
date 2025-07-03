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
    link: "",
    github: "https://github.com/kemickoko/homepage",
  },
  {
    id: "2",
    title: "硬貨計算ゲーム",
    description: "コインの合計金額を当てるミニゲーム",
    link: "https://coin-game-kappa.vercel.app/",
    github: "https://github.com/kemickoko/coin-game",
  },
];