import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogsComponent } from './catalogs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CatalogsComponent
  ],
  exports: [
    CatalogsComponent
  ]
})
export class CatalogsModule { }
