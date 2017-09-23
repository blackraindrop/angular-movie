import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Album } from '../../models/album';
import { Catalog } from '../../models/catalog';

import * as fromHome from '../../reducers';
import * as albumActions from '../../actions/album';
import * as catalogActions from '../../actions/catalog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  albums$: Observable<Album[]>;
  catalogs$: Observable<Catalog[]>;

  constructor(private store: Store<fromHome.State>) {
    this.albums$ = this.store.select(fromHome.getHomeAlbums);
    this.catalogs$ = this.store.select(fromHome.getHomeCatalogs);
  }

  ngOnInit() {
    this.store.dispatch(new catalogActions.Load());
  }

  onSelectCatalog(catalog: Catalog) {
    this.store.dispatch(new albumActions.Load(catalog.path));
  }

  onSelectAlbum(album: Album) {
    this.store.dispatch(new albumActions.Select(album));
  }

}
