/**
 * Convert from source unit to target unit
 * use : number | unitConvert : sourceUnit : targetUnit
 * e.g
 *   100 | unitConver : 'm':'cm'
 *
 */
declare var require: any;
import { Pipe, PipeTransform } from '@angular/core';
var convert = require('convert-units');

@Pipe({
  name: 'unitConvert',
})
export class UnitConvertPipe implements PipeTransform {
  transform(value: any, sourceUnit: string, targetUnit: string): any {
    if (!value) {
      return;
    }
    if (!sourceUnit) throw 'source unit missing';

    if (!targetUnit) throw 'Missing target unit';
    return convert(value).from(sourceUnit).to(targetUnit);
  }
}
