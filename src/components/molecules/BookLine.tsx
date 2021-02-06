import { FC } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Book } from '../../domains/models/books';

const BookLine: FC<{ book: Book }> = ({ book }) => (
  <>
    <Card>
      <CardContent>
        <Typography>{book.title}</Typography>
      </CardContent>
    </Card>
  </>
);

export default BookLine;
