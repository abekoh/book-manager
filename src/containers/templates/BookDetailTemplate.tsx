import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useGetBooks from '../../redux/hooks/use-get-books';
import BookDetailTemplate from '../../components/templates/BookDetailTemplate';

const EnhancedBookDetailTemplate: FC = () => {
  const { books } = useGetBooks();
  const { bookId } = useParams();

  const targetBook = books.find((book) => book.id.toString() === bookId);
  if (!targetBook) {
    return <Navigate to="/books" />;
  }

  return <BookDetailTemplate book={targetBook} />;
};

export default EnhancedBookDetailTemplate;
