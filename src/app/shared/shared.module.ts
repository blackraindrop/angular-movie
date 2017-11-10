import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

const MODULES = [
  CommonModule,
  FormsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatButtonModule
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
