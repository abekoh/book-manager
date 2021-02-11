import { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Book } from '../../domain/models/book';
import BookLine from '../molecules/BookLine';

export type Props = {
  books: Book[];
  isLoading?: boolean;
};

const BookList: FC<Props> = ({ books = [], isLoading = false }) => (
  <div>
    {isLoading}
    <Grid container xs={12} direction="column" spacing={1}>
      {books.map((book) => (
        <BookLine key={book.id} book={book} />
      ))}
    </Grid>
  </div>
);

export default BookList;
