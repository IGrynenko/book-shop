import { Injectable } from '@angular/core';

import { HttpService } from '../../shared/services';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../../environments/environment';
import { retry } from 'rxjs/operators';

import { ISettings, Settings } from '../models/settings'

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  public settings: ISettings;

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) { }

  getSettings() {
    const settings = this.localStorageService.getItem(environment.settingsKey);
    
    if (!settings) {
      this.httpService.getOnClient<ISettings>(environment.settingsUrl).pipe(retry(2)).subscribe(obj => {
        this.localStorageService.setItem(environment.settingsKey, obj);
        this.settings = obj;
      },
      er => {
        this.settings = new Settings();
      })
    }
    this.settings = settings;
  }
}
