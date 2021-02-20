import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '../../domain/models/book';
import { bookSlice, BookState } from '../slices/book-slice';
import { IBookRepository } from '../../domain/repositories/book-repository';
import FirestoreBookRepository from '../../infrastructure/gateways/firestore-book-repository';

type ReturnValue = {
  books: Book[];
  isLoading: boolean;
};

const useGetBooks = (): ReturnValue => {
  const [isLoading, setIsLoading] = useState(false);
  const books = useSelector<BookState, Book[]>((state) => state.books);
  const dispatch = useDispatch();
  // const repository: IBookRepository = useMemo(() => StaticBookRepository, []);
  const repository: IBookRepository = useMemo(
    () => FirestoreBookRepository,
    [],
  );

  useEffect(() => {
    let isUnmounted = false;
    const { booksGotten } = bookSlice.actions;
    const load = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const fetchedBooks: Book[] = await repository.getBooks(); // eslint-disable-line no-shadow
        if (!isUnmounted) {
          dispatch(booksGotten({ books: fetchedBooks }));
        }
      } catch (err) {
        throw new Error('failed to get books');
      } finally {
        setIsLoading(false);
      }
    };
    void load();

    return () => {
      isUnmounted = true;
    };
  }, [dispatch, repository]);

  return { books, isLoading };
};

export default useGetBooks;
