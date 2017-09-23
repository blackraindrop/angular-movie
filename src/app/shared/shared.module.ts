import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdButtonModule
} from '@angular/material';

const MODULES = [
  CommonModule,
  FormsModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdButtonModule
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
