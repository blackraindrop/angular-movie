import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '../../../core/models/result';
import { Album } from './model';

@Injectable()
export class AlbumsService {

  private url = 'api/albums';

  constructor(private http: HttpClient) { }

  getList(): Observable<Album[]> {
    return this.http.get<Result<Album[]>>(this.url)
      .map(data => data.result);
  }

}
