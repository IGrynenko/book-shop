import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  generate() {

  }
}

export function GeneratorFactory(n: number) {
  return (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    while(n > 0) {
      let index = Math.floor(Math.random() * characters.length);
      result += characters.charAt(index);
      n--;
    }

    return result;
  } 
}