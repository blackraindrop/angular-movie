import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '@core/models/result';
import { Episode } from '../models/episode';

@Injectable()
export class EpisodeService {
  private url = 'api/v1/episodes';

  constructor(private httpClient: HttpClient) { }

  getItem(path: string): Observable<Episode> {
    return this.httpClient.get<Result<Episode>>(`${this.url}?path=${path}`)
      .map(data => data.result);
  }
}
