/**
 * CategoryList コンポーネント
 *
 * 複数のカテゴリごとに分類されたリストデータを、
 * セクションタイトルとともに表示する再利用可能なコンポーネントです。
 *
 * 例：習得技術、資格情報など。
 *
 * @param title 表示するセクションのタイトル（例："習得技術"）
 * @param data  カテゴリ名をキーとし、それぞれに文字列配列を持つオブジェクト
 */

type Props = {
  title: string;
  data: Record<string, string[]>;
};

const CategoryList = ({ title, data }: Props) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2 border-b-2 border-blue-400 inline-block">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {Object.entries(data).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold mb-2">{category}</h4>
            <ul className="list-disc list-inside text-sm">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;