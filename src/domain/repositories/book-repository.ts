import { Book } from '../models/book';

interface IBookRepository {
  getBooks: () => Book[];
}

export default IBookRepository;
