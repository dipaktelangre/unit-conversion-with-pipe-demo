import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UnitConvertPipe } from './unit-pipes/unit.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DataTableComponent, UnitConvertPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
