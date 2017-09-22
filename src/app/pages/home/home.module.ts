import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { CatalogsService } from './services/catalogs.service';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';

import { CatalogEffects } from './effects/catalog';
import { reducers } from './reducers';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([CatalogEffects])
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
