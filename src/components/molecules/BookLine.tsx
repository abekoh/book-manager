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
import BookTagList from './BookTagList';

const BookLine: FC<{ book: Book }> = ({ book }) => (
  <Grid item>
    <CardActionArea component={Link} to={`/books/${book.id}`}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">{book.title}</Typography>
          <BookTagList tags={book.tags} />
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
);

export default BookLine;
