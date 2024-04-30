// Original file: ../proto/bookStore.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Book as _bookStorePackage_Book, Book__Output as _bookStorePackage_Book__Output } from '../bookStorePackage/Book';
import type { BookID as _bookStorePackage_BookID, BookID__Output as _bookStorePackage_BookID__Output } from '../bookStorePackage/BookID';
import type { BookWithID as _bookStorePackage_BookWithID, BookWithID__Output as _bookStorePackage_BookWithID__Output } from '../bookStorePackage/BookWithID';
import type { Books as _bookStorePackage_Books, Books__Output as _bookStorePackage_Books__Output } from '../bookStorePackage/Books';
import type { Empty as _bookStorePackage_Empty, Empty__Output as _bookStorePackage_Empty__Output } from '../bookStorePackage/Empty';
import type { Response as _bookStorePackage_Response, Response__Output as _bookStorePackage_Response__Output } from '../bookStorePackage/Response';

export interface BookStoreServiceClient extends grpc.Client {
  AddBook(argument: _bookStorePackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _bookStorePackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _bookStorePackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _bookStorePackage_Book, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookStorePackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookStorePackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookStorePackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookStorePackage_Book, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteBook(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteBook(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteBook(argument: _bookStorePackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteBook(argument: _bookStorePackage_BookID, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _bookStorePackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteBook(argument: _bookStorePackage_BookID, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  
  GetAllBooks(argument: _bookStorePackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  GetAllBooks(argument: _bookStorePackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  GetAllBooks(argument: _bookStorePackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  GetAllBooks(argument: _bookStorePackage_Empty, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _bookStorePackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _bookStorePackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _bookStorePackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _bookStorePackage_Empty, callback: grpc.requestCallback<_bookStorePackage_Books__Output>): grpc.ClientUnaryCall;
  
  GetBookByID(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  GetBookByID(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  GetBookByID(argument: _bookStorePackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  GetBookByID(argument: _bookStorePackage_BookID, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _bookStorePackage_BookID, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _bookStorePackage_BookID, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  getBookById(argument: _bookStorePackage_BookID, callback: grpc.requestCallback<_bookStorePackage_Book__Output>): grpc.ClientUnaryCall;
  
  UpdateBook(argument: _bookStorePackage_BookWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _bookStorePackage_BookWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _bookStorePackage_BookWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _bookStorePackage_BookWithID, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookStorePackage_BookWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookStorePackage_BookWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookStorePackage_BookWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookStorePackage_BookWithID, callback: grpc.requestCallback<_bookStorePackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface BookStoreServiceHandlers extends grpc.UntypedServiceImplementation {
  AddBook: grpc.handleUnaryCall<_bookStorePackage_Book__Output, _bookStorePackage_Response>;
  
  DeleteBook: grpc.handleUnaryCall<_bookStorePackage_BookID__Output, _bookStorePackage_Response>;
  
  GetAllBooks: grpc.handleUnaryCall<_bookStorePackage_Empty__Output, _bookStorePackage_Books>;
  
  GetBookByID: grpc.handleUnaryCall<_bookStorePackage_BookID__Output, _bookStorePackage_Book>;
  
  UpdateBook: grpc.handleUnaryCall<_bookStorePackage_BookWithID__Output, _bookStorePackage_Response>;
  
}

export interface BookStoreServiceDefinition extends grpc.ServiceDefinition {
  AddBook: MethodDefinition<_bookStorePackage_Book, _bookStorePackage_Response, _bookStorePackage_Book__Output, _bookStorePackage_Response__Output>
  DeleteBook: MethodDefinition<_bookStorePackage_BookID, _bookStorePackage_Response, _bookStorePackage_BookID__Output, _bookStorePackage_Response__Output>
  GetAllBooks: MethodDefinition<_bookStorePackage_Empty, _bookStorePackage_Books, _bookStorePackage_Empty__Output, _bookStorePackage_Books__Output>
  GetBookByID: MethodDefinition<_bookStorePackage_BookID, _bookStorePackage_Book, _bookStorePackage_BookID__Output, _bookStorePackage_Book__Output>
  UpdateBook: MethodDefinition<_bookStorePackage_BookWithID, _bookStorePackage_Response, _bookStorePackage_BookWithID__Output, _bookStorePackage_Response__Output>
}
