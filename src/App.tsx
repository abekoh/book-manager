import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import BooksPage from './components/pages/BooksPage';
import BookDetailTemplate from './containers/templates/BookDetailTemplate';

const App: FC = () => (
  <>
    <Routes>
      <Route path="books">
        <Route path="/" element={<BooksPage />} />
        <Route path=":bookId" element={<BookDetailTemplate />} />
      </Route>
      <Route path="*" element={<Navigate to="/books" />} />
    </Routes>
  </>
);

export default App;
