import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdSidenavModule, MdToolbarModule } from '@angular/material';

const MODULES = [
  CommonModule,
  MdSidenavModule,
  MdToolbarModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class SharedModule { }
