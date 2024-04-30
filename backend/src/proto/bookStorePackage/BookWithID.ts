// Original file: ../proto/bookStore.proto

import type { BookID as _bookStorePackage_BookID, BookID__Output as _bookStorePackage_BookID__Output } from '../bookStorePackage/BookID';
import type { Book as _bookStorePackage_Book, Book__Output as _bookStorePackage_Book__Output } from '../bookStorePackage/Book';

export interface BookWithID {
  'bookId'?: (_bookStorePackage_BookID | null);
  'book'?: (_bookStorePackage_Book | null);
}

export interface BookWithID__Output {
  'bookId'?: (_bookStorePackage_BookID__Output);
  'book'?: (_bookStorePackage_Book__Output);
}
