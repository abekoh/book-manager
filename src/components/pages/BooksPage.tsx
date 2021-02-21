import { FC } from 'react';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import BookList from '../../containers/organisms/BookList';
import AddButton from '../atoms/AddButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

const BooksPage: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item textAlign="center">
          <AddButton label="追加" path="/books/new" />
        </Grid>
        <Grid item>
          <BookList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BooksPage;
