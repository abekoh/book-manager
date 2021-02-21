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
