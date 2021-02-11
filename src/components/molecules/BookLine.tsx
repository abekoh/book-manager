import { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Book } from '../../domain/models/book';

const BookLine: FC<{ book: Book }> = ({ book }) => (
  <Grid item>
    <CardActionArea component={Link} to={`/books/${book.id}`}>
      <Card>
        <CardContent>
          <Typography>{book.title}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
);

export default BookLine;
