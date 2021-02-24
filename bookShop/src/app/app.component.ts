import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('appTitle', { static: false }) title: ElementRef;

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Book Shop';
    console.log(this.title)
  }
}
