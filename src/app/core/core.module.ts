import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [SharedModule, HttpClientModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
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
