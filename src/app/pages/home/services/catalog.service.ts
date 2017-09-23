import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '@core/models/result';
import { Catalog } from '../models/catalog';

@Injectable()
export class CatalogService {

  private url = 'api/v1/catalogs';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Catalog[]> {
    return this.httpClient.get<Result<Catalog[]>>(this.url)
      .map(data => data.result);
  }

}
