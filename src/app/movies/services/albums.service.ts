import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '../../core/models/result';
import { Movie } from '../models';

@Injectable()
export class MoviesService {

  private url = 'api/albums';

  constructor(private http: HttpClient) { }

  getList(): Observable<Movie[]> {
    return this.http.get<Result<Movie[]>>(this.url)
      .map(data => data.result);
  }

}
