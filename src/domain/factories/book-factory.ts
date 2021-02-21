import { uuid } from 'uuidv4';
import { Book, BookWithoutId } from '../models/book';

const createBook = (tempBook: BookWithoutId): Book => ({
  ...tempBook,
  id: uuid(),
});

export default createBook;
