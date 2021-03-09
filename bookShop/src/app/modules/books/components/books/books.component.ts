import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IBook } from 'src/app/modules/shared/models';
import { BooksService } from '../../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {

  books$: Observable<IBook[]>;

  constructor(
    private booksService: BooksService
  ) { }
  
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks();
  }

}
