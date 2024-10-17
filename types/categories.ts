export const Categories = [
  "フロントエンド",
  "バックエンド",
  "インフラ",
  "AI",
  "その他",
] as const;

// Category 型は Categories 配列のいずれかの要素のみを許可
export type Category = (typeof Categories)[number];
