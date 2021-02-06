import { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Book } from '../../domain/models/book';
import BookLine from '../molecules/BookLine';

export type Props = {
  books: Book[];
  isLoading?: boolean;
};

const BookList: FC<Props> = ({ books = [], isLoading = false }) => (
  <>
    {isLoading}
    <List>
      {books.map((book) => (
        <ListItem>
          <BookLine book={book} />
        </ListItem>
      ))}
    </List>
  </>
);

export default BookList;
