import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from 'src/app/modules/books/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    public booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  remove(id: number): void {
    this.booksService.removeBook(id);
  }

  edit(id: number): void {
    this.router.navigate(['/admin/product/edit', id]);
  }

  addBook(): void {
    this.router.navigate(['/admin/product/add']);
  }
}
