import { IBook } from './book';

export interface IBookInCart {
    book: IBook;
    numOfCopies: number;
}