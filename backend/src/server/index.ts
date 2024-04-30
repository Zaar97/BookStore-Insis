import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType} from '../proto/bookStore'
import { BookStoreServiceHandlers } from '../proto/bookStorePackage/BookStoreService'
import { Empty } from '../proto/bookStorePackage/Empty'
import { Books } from '../proto/bookStorePackage/Books'
import { Book } from '../proto/bookStorePackage/Book'
import { databaseConnection } from './services/db.service' 
import path from 'path'
import { BookServerService } from './services/bookStore.service'
import { Response } from '../proto/bookStorePackage/Response'
import { BookWithID } from '../proto/bookStorePackage/BookWithID'
import { BookID } from '../proto/bookStorePackage/BookID'

const PROTO_PATH : string = "../../../proto/bookStore.proto"
const PORT : number = 5001

const options : protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

const protoBuf : protoLoader.PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options)
const grpcObj : ProtoGrpcType = (grpc.loadPackageDefinition(protoBuf) as unknown) as ProtoGrpcType
const bookService = grpcObj.bookStorePackage

const main = () => {
  databaseConnection().then(() => {
    const server = getServer()
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
      (err : Error | null, port : number) => {
        if(err) {
          console.error(err.message)
          return
        }
        console.log(`Server started on port ${port}`)
        
        server.start()
      }
    )
  })
}

const getServer = () => {
  const server : grpc.Server = new grpc.Server()
  server.addService(bookService.BookStoreService.service, {
    'GetAllBooks' : (call : grpc.ServerUnaryCall<Empty, Books>, callback : grpc.sendUnaryData<Books>) => {
      console.log('Server success get all Data')
      BookServerService.getAll().then((books : Books | undefined) => {
        callback(null, books)
      }) 
    },
    'AddBook' : (call : grpc.ServerUnaryCall<Book, Response>, callback : grpc.sendUnaryData<Response>) => {
      const book = call.request
      console.log('Server success Create Data')
      BookServerService.createBook(book).then((res : Response | undefined) => {
        callback(null, res)
      })
    },
    'UpdateBook' : (call : grpc.ServerUnaryCall<BookWithID, Response>, callback : grpc.sendUnaryData<Response>) => {
      const book = call.request
      console.log('Server succed get all Data')
      BookServerService.updateBook(book).then((res : Response | undefined) => {
        callback(null, res)
      })
    },
    'DeleteBook' : (call : grpc.ServerUnaryCall<BookID, Response>, callback : grpc.sendUnaryData<Response>) => {
      const BookId = call.request
      BookServerService.deleteBook(BookId).then((res : Response | undefined) => {
        callback(null, res)
      })
    }
  } as BookStoreServiceHandlers ) 
  return server
}

main()