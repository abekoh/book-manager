import { Book } from '../models/book';

interface IBookRepository {
  getBooks: () => Promise<Book[]>;
}

export default IBookRepository;
