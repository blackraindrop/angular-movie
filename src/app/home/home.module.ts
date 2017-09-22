import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { CatalogsService } from './services/catalogs.service';
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
  ],
  providers: [
    CatalogsService
  ]
})
export class HomeModule { }
