import { FC } from 'react';
import staticBooks from '../../data/staticBooks';
import BookList from '../../components/organisms/BookList';

const EnhancedBookList: FC = () => <BookList books={staticBooks} />;

export default EnhancedBookList;
