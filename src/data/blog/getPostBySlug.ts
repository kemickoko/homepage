import { getPosts } from './getPosts';
import type { PostWithMeta } from './blogData';

/**
 * 指定された slug に一致する投稿を取得する関数
 *
 * @param slug - 検索対象となる投稿のスラグ（例: 'django-api'）
 * @returns 対応する投稿オブジェクト（見つからなければ undefined）
 */

export const getPostBySlug = (slug: string): PostWithMeta | undefined => {
  // 全投稿データを取得
  const posts = getPosts();

  // slug が一致する投稿を探して返す（見つからない場合は undefined）
  return posts.find(post => post.slug === slug);
};