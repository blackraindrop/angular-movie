import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import * as components from './components';

const COMPONENTS = [
  components.HeaderComponent
];

@NgModule({
  imports: [SharedModule],
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
