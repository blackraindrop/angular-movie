import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Catalog } from '../../models/catalog';
import * as fromHome from '../../reducers';
import * as catalog from '../../actions/catalog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  catalogs$: Observable<Catalog[]>;

  constructor(private store: Store<fromHome.State>) {
    this.catalogs$ = store.select(fromHome.getHomeCatalogs);
  }

  ngOnInit() {
    this.store.dispatch(new catalog.Load());
  }

}
