import { IBookRepository } from '../../domain/repositories/book-repository';
import { Book } from '../../domain/models/book';

const staticBooks: Book[] = [
  {
    title: 'ドメイン駆動設計入門',
    subtitle: 'ボトムアップでわかる！ドメイン駆動設計の基本',
    price: 3520,
    url: 'https://www.shoeisha.co.jp/book/detail/9784798150727',
    tags: [{ name: 'DDD' }],
    isCompleted: true,
  },
  {
    title: 'リファクタリング',
    subtitle: '既存のコードを安全に改善する',
    price: 4840,
    url: 'https://www.ohmsha.co.jp/book/9784274224546/',
    tags: [],
    isCompleted: false,
  },
  {
    title: 'マイクロサービスアーキテクチャ',
    price: 3740,
    url: 'https://www.oreilly.co.jp/books/9784873117607/',
    tags: [],
    isCompleted: false,
  },
];

const StaticBookRepository: IBookRepository = {
  getBooks: () => Promise.resolve(staticBooks),
};

export default StaticBookRepository;
