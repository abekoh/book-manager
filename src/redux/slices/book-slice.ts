import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';
import { Book } from '../../domain/models/book';

export type BookState = { books: Book[] };
const initialState: BookState = { books: [] };

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    booksGotten: (state, action: PayloadAction<{ books: Book[] }>) => ({
      ...state,
      books: action.payload.books,
      isLoading: false,
      error: null,
    }),
    addBook: (state: BookState, action: PayloadAction<Omit<Book, 'id'>>) => {
      const id = uuid();
      state.books.push({ ...action.payload, id });
    },
  },
});
