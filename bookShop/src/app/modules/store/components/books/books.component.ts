import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBook } from '../../models';
import { BooksService } from '../../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: IBook[];

  private destroy$ = new Subject<boolean>();

  constructor(
    private booksService: BooksService
  ) { }
  
  ngOnInit(): void {
    this.booksService.getBooks().pipe(takeUntil(this.destroy$)).subscribe(books => this.books = books);
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }
}
