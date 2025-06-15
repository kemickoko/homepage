import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">My Portfolio</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              自己紹介
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:underline">
              ポートフォリオ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;