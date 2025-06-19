import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import classNames from 'classnames';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: '自己紹介' },
    { to: '/portfolio', label: 'ポートフォリオ' },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">えめっとラボ</Link>
        </h1>

        {/* モバイルメニュー開閉ボタン */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* デスクトップ用ナビゲーション */}
        <ul className="hidden md:flex space-x-4">
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

      {/* モバイル用メニュー（開閉） */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
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