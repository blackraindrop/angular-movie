import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Album } from '../../models/album';
import { Catalog } from '../../models/catalog';

import * as fromHome from '../../reducers';
import * as album from '../../actions/album';
import * as catalog from '../../actions/catalog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  albums$: Observable<Album[]>;
  catalogs$: Observable<Catalog[]>;

  constructor(private store: Store<fromHome.State>) {
    this.albums$ = store.select(fromHome.getHomeAlbums);
    this.catalogs$ = store.select(fromHome.getHomeCatalogs);
  }

  ngOnInit() {
    this.store.dispatch(new catalog.Load());
  }

  onSelectCatalog(catalog: Catalog) {
    this.store.dispatch(new album.Load(catalog.path));
  }

}
