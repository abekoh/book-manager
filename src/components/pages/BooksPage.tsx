import { FC } from 'react';
import { Container } from '@material-ui/core';
import BookList from '../../containers/organisms/BookList';

const BooksPage: FC = () => (
  <>
    <Container maxWidth="sm">
      <BookList />
    </Container>
  </>
);

export default BooksPage;
