import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import BookList from './containers/organisms/BookList';
import BookDetail from './containers/molecules/BookDetail';

const App: FC = () => (
  <>
    <Routes>
      <Route path="books">
        <Route path="/" element={<BookList />} />
        <Route path=":bookId" element={<BookDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/books" />} />
    </Routes>
  </>
);

export default App;
