import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Result } from '../../core/models/result';
import { Catalog } from '../models/catalog';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CatalogsService {

  private catalogsUrl = 'api/catalogs';

  constructor(private http: HttpClient) { }

  getCatalogs(): Observable<Catalog[]> {
    return this.http.get<Result<Catalog[]>>(this.catalogsUrl)
      .map(data => data.result);
  }

}
