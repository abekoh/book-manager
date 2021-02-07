import { Book } from '../models/book';

export type IBookRepository = {
  getBooks: () => Promise<Book[]>;
};
