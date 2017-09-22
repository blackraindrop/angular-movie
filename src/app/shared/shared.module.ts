import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdSidenavModule, MdToolbarModule } from '@angular/material';

const MATERIALMODULES = [
  MdToolbarModule,
  MdToolbarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIALMODULES
  ],
  exports: [
    ...MATERIALMODULES
  ],
  declarations: []
})
export class SharedModule { }
