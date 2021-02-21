export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  url?: string;
  tags: Tag[];
  isCompleted: boolean;
};

export type BookWithoutId = Omit<Book, 'id'>;

export type Tag = {
  name: string;
};

export const TAG_PRESETS = ['設計', 'DDD'] as const;
export type TagPresets = typeof TAG_PRESETS;
