import { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Book } from '../../domains/models/books';
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
