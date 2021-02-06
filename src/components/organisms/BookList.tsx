import { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Book } from '../../domain/models/book';
import BookLine from '../molecules/BookLine';

const BookList: FC<{ books: Book[] }> = ({ books = [] }) => (
  <List>
    {books.map((book) => (
      <ListItem>
        <BookLine book={book} />
      </ListItem>
    ))}
  </List>
);

export default BookList;
