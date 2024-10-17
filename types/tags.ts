export const Tags = ["AWS", "AWSwwwありがとう", "AW"] as const;

// Category 型は Categories 配列のいずれかの要素のみを許可
export type Tag = (typeof Tags)[number];
