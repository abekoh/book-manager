import firebase from 'firebase';
import { IBookRepository } from '../../domain/repositories/book-repository';
import { Book } from '../../domain/models/book';
import db from './firebase';

type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

type BookDoc = {
  title: string;
  subtitle?: string;
  price: number;
  url?: string;
  tags: string[];
  isCompleted: boolean;
};

const FirestoreBookRepository: IBookRepository = {
  getBooks: async () => {
    const snapShot = await db.collection('books').get();
    const result: Book[] = snapShot.docs.map((doc: QueryDocumentSnapshot) => {
      const data = doc.data() as BookDoc;

      return {
        id: doc.id,
        title: data.title,
        subtitle: data.subtitle,
        price: data.price,
        url: data.url,
        tags: data.tags.map((str) => ({
          name: str,
        })),
        isCompleted: data.isCompleted,
      };
    });

    return Promise.resolve(result);
  },
};
export default FirestoreBookRepository;
