import { uuid } from 'uuidv4';
import { Book, BookForm } from '../models/book';

const createBook = (bookForm: BookForm): Book => ({
  id: uuid(),
  title: bookForm.title,
  subtitle: bookForm.subtitle,
  price: bookForm.price,
  url: bookForm.url,
  tags: bookForm.tags.map((tagStr) => ({ name: tagStr })),
  isCompleted: bookForm.isCompleted,
});

export default createBook;
