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
  <div>
    {isLoading}
    <List>
      {books.map((book) => (
        <Link to={`/books/${book.id}`}>
          <ListItem button key={book.id}>
            <BookLine book={book} />
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
);

export default BookList;
