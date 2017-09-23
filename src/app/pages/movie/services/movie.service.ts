import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '@core/models/result';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  private url = 'api/v1/movies';

  constructor(private httpClient: HttpClient) { }

  getList(path: string): Observable<Movie[]> {
    return this.httpClient.get<Result<Movie[]>>(`${this.url}?path=${path}`)
      .map(data => data.result);
  }
}
