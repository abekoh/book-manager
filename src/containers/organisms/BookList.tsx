import { FC } from 'react';
import BookList from '../../components/organisms/BookList';
import useGetBooks from '../../redux/hooks/use-get-books';

const EnhancedBookList: FC = () => {
  const { books } = useGetBooks();

  return <BookList books={books} />;
};

export default EnhancedBookList;
