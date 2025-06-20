import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">えめっとのITラボへようこそ！</h1>
      <p className="text-lg mb-4">
        このページでは、個人の学習成果やWebアプリの開発実験などを公開しています。
      </p>
      <p className="mb-8">
        自己紹介や技術スタックは
        <Link to="/about" className="text-blue-600 underline hover:text-blue-800 ml-1">
          こちら
        </Link>
        をご覧ください。
      </p>

      <div className="space-y-4">
        <Link
          to="/portfolio"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ポートフォリオを見る
        </Link>
      </div>
    </main>
  );
};