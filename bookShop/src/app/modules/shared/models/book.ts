import { BookType } from './book-types';

export interface IBook {
    id: number;
    name: string;
    description: string;
    price: number;
    category: BookType;
    createDate: string;
    isAvailable: boolean;
}
