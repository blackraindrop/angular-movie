import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Catalog } from './home';
import * as fromHome from './home/reducers';
import * as catalog from './home/actions/catalog';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  catalogs$: Observable<Catalog[]>;

  constructor(private store: Store<fromHome.State>) {
    this.catalogs$ = store.select(fromHome.getHomeCatalogs);

  }

  ngOnInit() {
    console.log('加载数据');
    this.store.dispatch(new catalog.Load());
  }

}
