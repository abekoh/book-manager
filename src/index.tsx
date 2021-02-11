import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@emotion/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bookSlice } from './redux/slices/book-slice';
import theme from './theme';

const store = configureStore({
  reducer: bookSlice.reducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
