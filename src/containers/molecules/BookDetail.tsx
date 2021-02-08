import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useGetBooks from '../../redux/hooks/use-get-books';
import BookDetail from '../../components/molecules/BookDetail';

const EnhancedBookDetail: FC = () => {
  const { books } = useGetBooks();
  const { bookId } = useParams();

  const targetBook = books.find((book) => book.id.toString() === bookId);
  if (targetBook) {
    return <BookDetail book={targetBook} />;
  }

  return <Navigate to="/books" />;
};

export default EnhancedBookDetail;
