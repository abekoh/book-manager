import { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Book } from '../../domain/models/book';
import BookTagList from './BookTagList';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
    },
  }),
);

const BookLine: FC<{ book: Book }> = ({ book }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <CardActionArea component={Link} to={`/books/${book.id}`}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">{book.title}</Typography>
            <BookTagList tags={book.tags} />
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default BookLine;
