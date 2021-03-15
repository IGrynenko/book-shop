import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BooksService } from 'src/app/modules/books/services';
import { IBook } from 'src/app/modules/shared/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  _books: IBook[];
  private _subs: Subscription[] = [];

  constructor(
    public booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._subs.push(this.booksService.getBooks().subscribe(books => this._books = books));
  }

  remove(id: number): void {
    this._subs.push(this.booksService.removeBook(id).subscribe(r => {
      const el = this._books.find(b => b.id === id);
      const index = this._books.indexOf(el);

      if (index >= 0)
        this._books.splice(index, 1);
    }));
  }

  edit(id: number): void {
    this.router.navigate(['/admin/product/edit', id]);
  }

  addBook(): void {
    this.router.navigate(['/admin/product/add']);
  }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

}
