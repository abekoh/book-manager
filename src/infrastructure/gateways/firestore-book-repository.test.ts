import FirestoreBookRepository from './firestore-book-repository';

const sampleDataFunc = () => ({
  title: 'ドメイン駆動設計入門',
  subtitle: 'ボトムアップでわかる！ドメイン駆動設計の基本',
  price: 3520,
  url: 'https://www.shoeisha.co.jp/book/detail/9784798150727',
  tags: ['DDD', '設計'],
  isCompleted: true,
});

jest.mock('./firestore-db', () => ({
  collection: () => ({
    get: jest.fn(() =>
      Promise.resolve({
        docs: [
          {
            id: '550e8400-e29b-41d4-a716-446655440000',
            data: sampleDataFunc,
          },
        ],
      }),
    ),
    doc: jest.fn(() => ({
      get: jest.fn(() =>
        Promise.resolve({
          data: sampleDataFunc,
        }),
      ),
    })),
  }),
}));

describe('getBooks すべての本の情報を取得する', () => {
  test('期待した本の情報が返され、正しくマッピングされる。', async () => {
    const actual = await FirestoreBookRepository.getBooks();
    expect(actual.length).toBe(1);
    expect(actual[0]).toEqual({
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'ドメイン駆動設計入門',
      subtitle: 'ボトムアップでわかる！ドメイン駆動設計の基本',
      price: 3520,
      url: 'https://www.shoeisha.co.jp/book/detail/9784798150727',
      tags: [{ name: 'DDD' }, { name: '設計' }],
      isCompleted: true,
    });
  });
});

describe('getOneBook', () => {
  test('期待した本の情報が返され、正しくマッピングされる。', async () => {
    const actual = await FirestoreBookRepository.getOneBook(
      '550e8400-e29b-41d4-a716-446655440000',
    );
    expect(actual).toEqual({
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'ドメイン駆動設計入門',
      subtitle: 'ボトムアップでわかる！ドメイン駆動設計の基本',
      price: 3520,
      url: 'https://www.shoeisha.co.jp/book/detail/9784798150727',
      tags: [{ name: 'DDD' }, { name: '設計' }],
      isCompleted: true,
    });
  });
});
