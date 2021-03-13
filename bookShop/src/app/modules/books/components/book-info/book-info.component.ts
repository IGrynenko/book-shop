import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBook } from 'src/app/modules/shared/models';
import { BooksService } from '../../services';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookInfoComponent implements OnInit {

  _book: IBook;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private booksService: BooksService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.initBookInfo();
  }

  private initBookInfo(): void {
    const bookId = this.route.snapshot.paramMap.get('productID');
    const bookInfo = this.booksService.getBookById(+bookId);
    if (bookInfo) {
      this._book = bookInfo;
    }
    else {
      this.router.navigate(['products-list']);
    }
  }

  back(): void {
    this.location.back();
  }

}
