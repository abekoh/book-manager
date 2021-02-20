import firebase from 'firebase';
import { IBookRepository } from '../../domain/repositories/book-repository';
import { Book } from '../../domain/models/book';

type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

const firebaseConfig = {
  apiKey: 'AIzaSyArdRrm9eDG5KPzE0kvYPoJVWszT0YksRM',
  authDomain: 'book-manager-d71cb.firebaseapp.com',
  projectId: 'book-manager-d71cb',
  storageBucket: 'book-manager-d71cb.appspot.com',
  messagingSenderId: '378394387235',
  appId: '1:378394387235:web:3c458d408962b9d6d6e296',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const FirestoreBookRepository: IBookRepository = {
  getBooks: async () => {
    const snapShot = await db.collection('books').get();
    const result: Book[] = snapShot.docs.map((doc: QueryDocumentSnapshot) => {
      const data = doc.data();

      /* eslint-disable @typescript-eslint/no-unsafe-assignment */
      return {
        id: 'a',
        title: data.title,
        subtitle: data.subtitle,
        price: data.price,
        url: data.url,
        tags: [],
        isCompleted: data.isCompleted,
      };
      /* eslint-enable */
    });

    return Promise.resolve(result);
  },
};
export default FirestoreBookRepository;
