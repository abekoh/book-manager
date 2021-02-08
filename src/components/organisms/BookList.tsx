import { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
        <ListItem key={book.id}>
          <Link to={`/books/${book.id}`}>
            <BookLine book={book} />
          </Link>
        </ListItem>
      ))}
    </List>
  </>
);

export default BookList;
