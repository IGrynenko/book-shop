import { BookType } from './book-type';

export class IBook {
    id: number;
    name: string;
    description: string;
    price: number;
    category: BookType;
    createDate: number;
    isAvailable: boolean;
}
