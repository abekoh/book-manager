import { FC } from 'react';
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import { Book } from '../../domain/models/book';
import BookTagList from './BookTagList';
import BookLink from '../atoms/BookLink';

const BookDetail: FC<{ book: Book }> = ({ book }) => (
  <>
    <Card>
      <CardContent>
        <Typography variant="h5">{book.title}</Typography>
        {book.subtitle && (
          <Typography variant="subtitle1">{book.subtitle}</Typography>
        )}
        <Typography variant="subtitle2" color="textSecondary">
          ￥{book.price.toLocaleString()}
        </Typography>
        <BookTagList tags={book.tags} />
        {book.url && <BookLink url={book.url} />}
        <FormControlLabel
          control={<Checkbox checked={book.isCompleted} color="primary" />}
          label="読了"
        />
      </CardContent>
    </Card>
  </>
);

export default BookDetail;
