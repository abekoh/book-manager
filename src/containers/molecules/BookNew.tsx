import { FC, useMemo, useState } from 'react';
import { BookForm } from '../../domain/models/book';
import { IBookRepository } from '../../domain/repositories/book-repository';
import FirestoreBookRepository from '../../infrastructure/gateways/firestore-book-repository';
import createBook from '../../domain/factories/book-factory';
import BookNew from '../../components/molecules/BookNew';

const EnhancedBookNew: FC = () => {
  const [book, setBook] = useState<BookForm>({
    title: '',
    subtitle: undefined,
    price: 0,
    url: undefined,
    tags: [],
    isCompleted: false,
  });
  const repository: IBookRepository = useMemo(
    () => FirestoreBookRepository,
    [],
  );
  const submit = async () => {
    if (!book) {
      return;
    }
    const bookWithId = createBook(book);
    await repository.setBook(bookWithId);
  };

  return <BookNew book={book} setBook={setBook} submitBook={submit} />;
};

export default EnhancedBookNew;
