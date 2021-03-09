import { Component, OnInit } from '@angular/core';

import { LocalStorageService, ConfigOptionsService, ConstantService, GeneratorService } from '../../../core/services';
import { APP_CONST } from '../../../core/services/constant.service';
import { GeneratorFactory } from '../../../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantService, useValue: APP_CONST },
    { provide: GeneratorService, useFactory: GeneratorFactory(10) }
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    private constantService: ConstantService,
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.localStorageService.setItem('a', 100);
    console.log(this.localStorageService.getItem('a'));

    const {App, Ver} = this.constantService;
    console.log(App);

    let num = this.generatorService;
    console.log(num);
  }

}
