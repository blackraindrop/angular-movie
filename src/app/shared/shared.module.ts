import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdSidenavModule, MdToolbarModule, MdListModule } from '@angular/material';

const MODULES = [
  CommonModule,
  FormsModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class SharedModule { }
