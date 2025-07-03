import type { PostWithMeta } from './blogData';

/**
 * blog-posts ディレクトリ内の投稿ファイルをすべて取得し、
 * ファイル名から日付とスラグを抽出して投稿オブジェクトの配列として返す関数。
 *
 * ファイル名の形式: `YYYY-MM-DD_slug.ts`
 * 例: `2025-06-20_django-api.ts` → date: '2025-06-20', slug: 'django-api'
 *
 * @returns 日付順（新しい順）にソートされた投稿データの配列
 */

// ./blog-posts/ ディレクトリ内の .ts ファイルをすべてインポート（ビルド時にバンドル）
// 'eager: true' により同期的に読み込まれる
const modules: Record<string, { default: PostWithMeta }> = import.meta.glob('./blog-posts/*.ts', {
  eager: true,
});


// 投稿データの一覧を取得する関数
export const getPosts = (): PostWithMeta[] => {
  // modulesオブジェクトの各ファイル（パスと中身）を配列に変換
  return Object.entries(modules).map(([path, mod]) => {
    // ファイル名だけを取得（例: '2025-06-20_django-api.ts' → '2025-06-20_django-api'）
    const filename = path.split('/').pop()?.replace('.ts', '') || '';

    // 日付とスラグに分割（例: ['2025-06-20', 'django-api']）
    const [date, ...slugParts] = filename.split('_');

    // スラグ部分を連結（例: 'django-api'）(スラグ内に'_'を入れても大丈夫なようにしている。)
    const slug = slugParts.join('_');

    // 各投稿データを整形して返す（ファイル内のdefault exportに、日付とスラグを追加）
    return {
      ...mod.default,
      date,
      slug,
    };
  })

  // 日付の新しい順にソート
  .sort((a, b) => b.date.localeCompare(a.date)); // 日付の新しい順にソート
};