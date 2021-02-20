import { Book } from '../models/book';

export type IBookRepository = {
  getBooks: () => Promise<Book[]>;
  getOneBook: (id: string) => Promise<Book | undefined>;
};
