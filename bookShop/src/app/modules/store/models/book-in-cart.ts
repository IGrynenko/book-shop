import { IBook } from './book-model';

export interface IBookInCart {
    book: IBook;
    numOfCopies: number;
}
