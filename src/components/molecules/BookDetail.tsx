import { FC } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Book } from '../../domain/models/book';

const BookDetail: FC<{ book: Book }> = ({ book }) => (
  <>
    <Card>
      <CardContent>
        <Typography>{book.title}</Typography>
        <Typography>{book.price}</Typography>
        {book.subtitle && <Typography>{book.subtitle}</Typography>}
      </CardContent>
    </Card>
  </>
);

export default BookDetail;
