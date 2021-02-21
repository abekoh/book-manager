import { FC } from 'react';
import { Container, Grid } from '@material-ui/core';
import BookNew from '../../containers/molecules/BookNew';

const BookNewPage: FC = () => (
  <Container maxWidth="sm">
    <Grid container direction="column" justifyContent="center" spacing={2}>
      <Grid item>
        <BookNew />
      </Grid>
    </Grid>
  </Container>
);

export default BookNewPage;
