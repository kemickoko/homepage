import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import classNames from 'classnames';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'ホーム' },
    { to: '/about', label: '自己紹介' },
    { to: '/portfolio', label: 'ポートフォリオ' },
    { to: '/blog', label: 'ブログ' },
  ];

  // モバイルメニュー開閉時にスクロール抑制
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white shadow z-50 relative">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">えめっとラボ</Link>
        </h1>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex space-x-6 text-base">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={classNames('hover:underline', {
                  'underline font-semibold': location.pathname === to,
                })}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 bg-blue-600 text-base">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => {
                  if (location.pathname !== to) setIsOpen(false);
                }}
                className={classNames('block hover:underline', {
                  'underline font-semibold': location.pathname === to,
                })}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;