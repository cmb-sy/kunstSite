export const Tags = ["教師あり学習", "kaggle", "数学", "教師なし学習"] as const;

// Category 型は Categories 配列のいずれかの要素のみを許可
export type Tag = (typeof Tags)[number];
