/**
 * ポートフォリオページのボタン
 *
 */

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string; // 色やサイズなどスタイルをここで指定
};

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className = '' }) => {
  const baseClasses =
    'inline-block text-sm text-white px-4 py-1.5 rounded-md transition w-28 text-center';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {children}
    </a>
  );
};