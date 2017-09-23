import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Episode } from '../../models/episode';
import { Movie } from '../../models/movie';

import * as fromMovie from '../../reducers';
import * as actions from '../../actions/movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {
  episode$: Observable<Episode>;
  movies$: Observable<Movie[]>;
  private actionsSubscription: Subscription;

  constructor(
    private store: Store<fromMovie.State>,
    private route: ActivatedRoute) {
    this.episode$ = this.store.select(fromMovie.getMovieEpisode);
    this.movies$ = this.store.select(fromMovie.getMovieMovies);
  }

  ngOnInit() {
    this.actionsSubscription = this.route.queryParamMap
      .map((params: ParamMap) => new actions.Load(params.get('path')))
      .subscribe(this.store);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSelectMovie(movie: Movie) {
    this.store.dispatch(new actions.Select(movie));
  }

}
