import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { CatalogsService } from './services/catalogs.service';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';

const MODULES = [
  HttpClientModule,
  SharedModule,
  HomeRoutingModule
];

const COMPONENTS = [
  HomePageComponent,
  CatalogsComponent
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    HomePageComponent,
    CatalogsComponent
  ],
  providers: [
    CatalogsService
  ]
})
export class HomeModule { }
