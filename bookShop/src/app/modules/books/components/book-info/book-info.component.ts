import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IBook } from 'src/app/modules/shared/models';
import { BooksService } from '../../services';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookInfoComponent implements OnInit, OnDestroy {

  _book: IBook;
  private _sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private booksService: BooksService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initBookInfo();
  }

  private initBookInfo(): void {
    const bookId = this.route.snapshot.paramMap.get('productID');
    this._sub = this.booksService.getBookById(+bookId).subscribe(books => {
      if (books && books.length > 0) {
        this._book = books[0];
        this.cd.detectChanges()
      }
      else {
        this.router.navigate(['products-list']);
      }
    })  
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
