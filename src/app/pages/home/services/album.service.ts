import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Result } from '@core/models/result';
import { Album } from '../models/album';

@Injectable()
export class AlbumService {

  private url = 'api/v1/albums';

  constructor(private httpClient: HttpClient) { }

  getList(path: string): Observable<Album[]> {
    return this.httpClient.get<Result<Album[]>>(`${this.url}?path=${path}`)
      .map(data => data.result);
  }

}
