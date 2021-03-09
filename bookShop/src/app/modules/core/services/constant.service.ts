import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  public App: string;
  public Ver: string;

  constructor() { }
}


export let APP_CONST = { App: "TaskManager", Ver: "1.0" };