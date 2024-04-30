import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/bookStore';
import path from 'path';
import { BookID } from '../proto/bookStorePackage/BookID';
import { Book } from '../proto/bookStorePackage/Book';
import express, { Request, Response } from 'express';
import { BookWithID } from '../proto/bookStorePackage/BookWithID';

const PROTO_PATH: string = "../../../proto/bookStore.proto";
const PORT: number = 5001;
const portClient = 3000

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const protoBuf = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options);
const grpcObj = grpc.loadPackageDefinition(protoBuf) as unknown as ProtoGrpcType;

const client = new grpcObj.bookStorePackage.BookStoreService(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

const onClientReady = () => {
  console.log(`Server running on port ${PORT} & Client running on port ${portClient}`);
  const app = express();
  app.use(express.json());

  app.get('/books', (req: Request, res: Response) => {
    client.GetAllBooks({}, (err: any, _res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(_res);
    });
  });

  app.post('/books', (req: Request, res: Response) => {
    const createInput: Book = req.body;
    const book: Book = createInput;
    client.AddBook(book, (err: any, _res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(_res);
    });
  });

  app.put('/books/:id', (req : Request, res : Response) => {
    const book : BookWithID = {
      bookId : {
        id : req.params.id 
      },
      book : req.body 
    }

    client.updateBook(book, 
      (err: any, _res: any) => {
        if(err) {
          console.error(err)
          return
        }
        res.send(_res)
      }
    )
  })

  app.delete('/books/:id', (req: Request, res: Response) => {
    const bookID: BookID = { id: req.params.id };
    client.DeleteBook(bookID, (err: any, _res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(_res);
    });
  });

  app.listen(portClient, () => {
    console.log("Express is started");
  });
};
