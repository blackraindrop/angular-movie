import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { AlbumService } from './services/album.service';
import { CatalogService } from './services/catalog.service';

import { AlbumItemComponent } from './components/album-item/album-item.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

import { reducers } from './reducers';
import { AlbumEffects } from './effects/album';
import { CatalogEffects } from './effects/catalog';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([AlbumEffects, CatalogEffects])
  ],
  declarations: [
    AlbumItemComponent,
    AlbumsComponent,
    CatalogsComponent,
    HomePageComponent
  ],
  providers: [
    AlbumService,
    CatalogService
  ]
})
export class HomeModule { }
