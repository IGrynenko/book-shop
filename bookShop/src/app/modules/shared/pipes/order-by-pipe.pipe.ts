import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform<T>(value: Array<T>, property: string, desc: boolean = true) {
    if (value && property) {
      let temp = [...value];
      if (property === 'numOfCopies') {
        temp.sort((a: T, b: T) => {
          if (a[property] > b[property]) {
            return desc ? 1 : -1;
          }
          if (a[property] < b[property]) {
            return desc ? -1 : 1;
          }
          return 0;
        });
      }
      else {
        temp.sort((a: T, b: T) => {
          if (a['book'][property] > b['book'][property]) {
            return desc ? 1 : -1;
          }
          if (a['book'][property] < b['book'][property]) {
            return desc ? -1 : 1;
          }
          return 0;
        });
      }
      return temp;
    }
  }
}
