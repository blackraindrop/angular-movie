import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '../../core/models/result';
import { Episode } from '../models';

@Injectable()
export class EpisodesService {

  private url = 'api/albums';

  constructor(private http: HttpClient) { }

  getList(): Observable<Episode[]> {
    return this.http.get<Result<Episode[]>>(this.url)
      .map(data => data.result);
  }

}
