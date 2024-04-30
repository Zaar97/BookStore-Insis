import { Book } from "../../proto/bookStorePackage/Book";
import { Books } from "../../proto/bookStorePackage/Books";
import { Response } from "../../proto/bookStorePackage/Response";
import { BookID } from "../../proto/bookStorePackage/BookID";
import { collections } from "./db.service";
import { ObjectId } from "mongodb";
import { BookWithID } from "../../proto/bookStorePackage/BookWithID";

export class BookServerService {
    static async getAll(): Promise<Books | undefined> {
        try {
            const booksDocs = await collections.books?.find().toArray();
            const booksData = (booksDocs as unknown) as Book[];
            let books: Books = {
                books: [],
            };
            booksData.forEach((book) => {
                books.books?.push({
                    author: book.author,
                    title: book.title,
                    description: book.description,
                    price: book.price,
                    disc: book.disc
                });
            });
            return books;
        } catch (err) {
            console.error("Error in getAll : \n", err);
        }
    }

    static async createBook(book: Book): Promise<Response | undefined> {
        try {
            const res = await collections.books?.insertOne(book);
            if (res) {
                const _res: Response = {
                    responseMsg: "Success creating new Book",
                };
                return _res;
            } else {
                const _res: Response = {
                    responseMsg: "Error when creating new Book",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in create book : \n", err);
        }
    }

    static async updateBook(book: BookWithID): Promise<Response | undefined> {
        try {
            const res = await collections.books?.updateOne(
                {
                    _id: new ObjectId(book.bookId?.id),
                },
                {
                    $set: book.book,
                }
            );
            if (res) {
                const _res: Response = {
                    responseMsg: "Success updating new book",
                };
                return _res;
            } else {
                const _res: Response = {
                    responseMsg: "Error when updating new book",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in update Book : \n", err);
        }
    }

    static async deleteBook(bookId: BookID): Promise<Response | undefined> {
        try {
            const res = await collections.books?.deleteOne({
                _id: new ObjectId(bookId.id),
            });
            if (res) {
                const _res: Response = {
                    responseMsg: "Success deleting new book",
                };
                return _res;
            } else {
                const _res: Response = {
                    responseMsg: "Error when deleting new book",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in delete book : \n", err);
        }
    }
}
