import { useState } from 'react';
import { Book } from '../domain/models/book';

type ReturnValue = {
  books: Book[];
};

const useGetBooks = (): ReturnValue => {
  const [isLoading, setIsLoading] = useState();
};
