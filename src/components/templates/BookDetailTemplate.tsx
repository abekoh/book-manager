import { FC } from 'react';
import { Container } from '@material-ui/core';
import { Book } from '../../domain/models/book';
import BookDetail from '../molecules/BookDetail';

type Prop = {
  book: Book;
};

const BookDetailTemplate: FC<Prop> = ({ book }) => (
  <Container maxWidth="sm">
    <BookDetail book={book} />
  </Container>
);

export default BookDetailTemplate;
