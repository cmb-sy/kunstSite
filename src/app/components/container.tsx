type Props = {
  children?: React.ReactNode;
};

// このコンポーネントは、子要素を中央揃えにし、左右にパディングを追加するためのコンテナとして機能します。
const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
