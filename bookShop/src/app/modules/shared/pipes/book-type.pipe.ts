import { Pipe, PipeTransform } from '@angular/core';
import { displayBookType } from '../models';

@Pipe({
  name: 'bookType'
})
export class BookTypePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return displayBookType[value];
  }

}
