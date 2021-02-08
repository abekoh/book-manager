import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import BookList from './containers/organisms/BookList';

const App: FC = () => (
  <>
    <Routes>
      <Route path="/books" element={<BookList />} />
      <Route path="*" element={<Navigate to="/books" />} />
    </Routes>
  </>
);

export default App;
