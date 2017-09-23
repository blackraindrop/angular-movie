import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input()
  movies: Movie[];

  @Output()
  select: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick(movie: Movie) {
    this.select.emit(movie);
  }

}
