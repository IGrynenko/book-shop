import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BookType, IBook } from '../../shared/models';
import { HttpService } from "../../shared/services";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: IBook[] = [
    { id: 1, name: 'Aaaa', category: BookType.Action, createDate: '2000-12-01', description: 'some description', isAvailable: true, price: 100 },
    { id: 2, name: 'Bbbb', category: BookType.Classics, createDate: '2010-01-21', description: 'some description', isAvailable: true, price: 200 },
    { id: 3, name: 'Cccc', category: BookType.Detective, createDate: '2001-07-13', description: 'some description', isAvailable: true, price: 50 },
    { id: 4, name: 'Dddd', category: BookType.Action, createDate: '1995-11-22', description: 'some description', isAvailable: false, price: 20 },
    { id: 5, name: 'Eeee', category: BookType.Fantasy, createDate: '1987-06-06', description: 'some description', isAvailable: true, price: 80 },
    { id: 6, name: 'Ffff', category: BookType.Historical, createDate: '2015-06-06', description: 'some description', isAvailable: true, price: 150 },
    { id: 7, name: 'Gggg', category: BookType.Horror, createDate: '2020-06-06', description: 'some description', isAvailable: false, price: 14 }
  ];

  private BOOKS_URL: string = 'books';

  constructor(
    private httpService: HttpService
  ) { }

  public getBooks(): Observable<IBook[]> {
    return this.httpService.get<IBook[]>(this.BOOKS_URL);
  }

  public getBookById(id: number): Observable<IBook[]> {
    return this.httpService.get<IBook[]>(this.BOOKS_URL + `?id=${id}`);
  }

  public removeBook(id: number): Observable<IBook> {
    return this.httpService.delete<IBook>(this.BOOKS_URL + `/${id}`);
  }

  public updateBook(book: IBook): Promise<IBook> {
    return this.httpService.put<IBook>(this.BOOKS_URL + `/${book.id}`, book).toPromise();
  }

  public addBook(book: IBook): Promise<IBook> {
    return this.httpService.post<IBook>(this.BOOKS_URL, book).toPromise();
  }
}
