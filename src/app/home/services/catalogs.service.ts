import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '../../core/models/result';
import { Catalog } from '../models/catalog';

@Injectable()
export class CatalogsService {

  private url = 'api/catalogs';

  constructor(private http: HttpClient) { }

  getList(): Observable<Catalog[]> {
    return this.http.get<Result<Catalog[]>>(this.url)
      .map(data => data.result);
  }

}
