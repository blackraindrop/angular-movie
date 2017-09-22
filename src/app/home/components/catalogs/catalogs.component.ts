import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Catalog } from '../../models/catalog';

export const CatalogsToken = new InjectionToken('CatalogsToken');

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  catalogs$: Observable<Catalog>;
  constructor(
    public http: HttpClient,
    public store$: Store<any>,
    @Inject(CatalogsToken) public catalogsToken: any
  ) {
    this.catalogs$ = this.store$.select<Catalog>(this.catalogsToken);
  }

  ngOnInit() {
    console.log(this.http);
  }

}
