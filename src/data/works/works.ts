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
  {
    id: "3",
    title: "Kコード検索アプリ",
    description: "指定の形式のcsvファイルからtsファイルに自動変換し、検索システムで表示するアプリ",
    link: "https://kemickoko.github.io/kcode-viewer/",
    github: "https://github.com/kemickoko/kcode-viewer",
  },
];