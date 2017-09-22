import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { CatalogsModule } from '@components/index';
import { reducers } from './home/reducers';
import { CatalogEffects } from './home/effects/catalog';
import { CatalogsService } from './home';
@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule,
    CatalogsModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([CatalogEffects])
  ],
  declarations: [PagesComponent],
  providers: [
    CatalogsService
  ]
})
export class PagesModule { }

export * from './home/models';
export * from './home/home.module';
export * from './albums/albums.module';
export * from './movies/movies.module';

