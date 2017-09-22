import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Result } from '../../core/models/result';
import { Movie } from '../models/movie';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CatalogsService {

  private catalogsUrl = 'api/movies?path=';

  constructor(private http: HttpClient) { }

  getCatalogs(): Observable<Movie[]> {
    return this.http.get<Result<Movie[]>>(this.catalogsUrl)
      .map(data => data.result);
  }

}
