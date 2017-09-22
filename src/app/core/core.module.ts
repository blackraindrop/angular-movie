import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const COMPONENTS = [
  HeaderComponent,
  SidebarComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      const msg = `CoreModule) has already been loaded.
        Import CoreModule) once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
