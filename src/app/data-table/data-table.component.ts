import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
declare var require: any;

var convert = require('convert-units');

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  lengthOptions = convert().list('length');
  lengthUnit: any = { from: 'm', to: 'cm' };

  weigthOptions = convert().list('mass');
  weigthUnit: any = { from: 'kg', to: 'lb' };

  volumeOptions = convert().list('volume');
  volumeUnit: any = { from: 'l', to: 'gal' };

  inputNumber = 1;

  randomNumbers = Array(50)
    .fill(0)
    .map((_) => {
      return this.getRandomInt(1, 1000);
    });

  randomNumbers$: Observable<number[]>;
  constructor() {}

  ngOnInit() {
    // console.log(this.randomNumbers);
    this.randomNumbers$ = of(this.randomNumbers);
  }

  onChangeLength(key, unit: any) {
    this.lengthUnit[key] = unit;
    console.log(this.lengthUnit);
  }

  onChangeWeigth(key, unit: any) {
    this.weigthUnit[key] = unit;
    console.log(this.lengthUnit);
  }
  onChangeVolume(key, unit: any) {
    this.volumeUnit[key] = unit;
    console.log(this.volumeUnit);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
