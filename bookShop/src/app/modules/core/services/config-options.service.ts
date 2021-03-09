import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { IConfig } from '../models';

@Injectable()
export class ConfigOptionsService {

  private config: IConfig;

  get getConfig(): IConfig {
    return this.config;
  }

  set setConfig(config: IConfig) {
    this.config = config;
  }

  constructor() { }

  updateConfig(partial: {id: string, login: string}): void {
    const { id, login } = partial;
    this.config.id = id;
    this.config.login = login;
  }
}
