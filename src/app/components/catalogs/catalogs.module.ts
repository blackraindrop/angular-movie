import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogsComponent } from './catalogs.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CatalogsComponent
  ],
  exports: [
    CatalogsComponent
  ]
})
export class CatalogsModule { }
