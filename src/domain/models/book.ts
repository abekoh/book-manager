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
