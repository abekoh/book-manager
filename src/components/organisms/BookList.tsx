import { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Book } from '../../domain/models/book';
import BookLine from '../molecules/BookLine';

export type Props = {
  books: Book[];
  isLoading?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BookList: FC<Props> = ({ books = [], isLoading = false }) => (
  <Grid container direction="column" spacing={1}>
    {books.map((book) => (
      <Grid item key={book.id}>
        <BookLine book={book} />
      </Grid>
    ))}
  </Grid>
);

export default BookList;
