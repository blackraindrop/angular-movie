import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdSidenavModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule
  ],
  declarations: []
})
export class SharedModule { }
