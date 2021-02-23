import firebase from 'firebase';
import { IBookRepository } from '../../domain/repositories/book-repository';
import { Book } from '../../domain/models/book';
import db from './firestore-db';

type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

type BookDoc = {
  title: string;
  subtitle?: string;
  price: number;
  url?: string;
  tags: string[];
  isCompleted: boolean;
};

const toBook = (id: string, bookDoc: BookDoc): Book => ({
  id,
  title: bookDoc.title,
  subtitle: bookDoc.subtitle,
  price: bookDoc.price,
  url: bookDoc.url,
  tags: bookDoc.tags.map((str) => ({
    name: str,
  })),
  isCompleted: bookDoc.isCompleted,
});

const toBookDoc = (book: Book): BookDoc => ({
  title: book.title,
  subtitle: book.subtitle,
  price: book.price,
  url: book.url,
  tags: book.tags.map((tag) => tag.name),
  isCompleted: book.isCompleted,
});

const FirestoreBookRepository: IBookRepository = {
  getBooks: async () => {
    const snapShot = await db.collection('books').get();
    const result: Book[] = snapShot.docs.map((doc: QueryDocumentSnapshot) => {
      const data = doc.data() as BookDoc;

      return toBook(doc.id, data);
    });

    return Promise.resolve(result);
  },
  getOneBook: async (id) => {
    const snapShot = await db.collection('books').doc(id).get();
    const data = snapShot.data() as BookDoc | undefined;

    return data
      ? Promise.resolve(toBook(id, data))
      : Promise.resolve(undefined);
  },
  setBook: (book) => {
    const ref = db.collection('books').doc(book.id);

    return ref.set(toBookDoc(book));
  },
};
export default FirestoreBookRepository;
