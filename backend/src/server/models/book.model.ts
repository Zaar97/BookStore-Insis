import { ObjectId } from "mongodb";

export class BookModelWithID {
  constructor(
    public id: ObjectId,
    public title: string,
    public author: string,
    public description: string,
    public price: string | number,
    public disc: number
  ) {}
}

export class BookModel {
  constructor(
    public title: string,
    public author: string,
    public description: string,
    public price: string | number,
    public disc: number
  ) {}
}
