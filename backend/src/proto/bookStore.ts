import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BookStoreServiceClient as _bookStorePackage_BookStoreServiceClient, BookStoreServiceDefinition as _bookStorePackage_BookStoreServiceDefinition } from './bookStorePackage/BookStoreService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  bookStorePackage: {
    Book: MessageTypeDefinition
    BookID: MessageTypeDefinition
    BookStoreService: SubtypeConstructor<typeof grpc.Client, _bookStorePackage_BookStoreServiceClient> & { service: _bookStorePackage_BookStoreServiceDefinition }
    BookWithID: MessageTypeDefinition
    Books: MessageTypeDefinition
    Empty: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

