import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    CatalogsComponent
  ]
})
export class HomeModule { }
