export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  url?: string;
  tags: Tag[];
  isCompleted: boolean;
};

export type Tag = {
  name: string;
};

export type BookForm = {
  title: string;
  subtitle?: string;
  price: number;
  url?: string;
  tags: string[];
  isCompleted: boolean;
};

export const TAG_PRESETS = ['設計', 'DDD'] as const;
export type TagPresets = typeof TAG_PRESETS;
