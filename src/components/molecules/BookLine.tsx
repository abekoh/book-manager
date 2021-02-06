import { FC } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Book } from '../../domain/models/book';

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
