import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  },
});
