import React, { FC } from 'react';
import './App.css';
import BookList from './containers/organisms/BookList';

const App: FC = () => (
  <div className="App">
    <BookList />
  </div>
);

export default App;
