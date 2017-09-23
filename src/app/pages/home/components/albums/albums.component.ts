import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  @Input()
  albums: Album[];

  @Output()
  select: EventEmitter<Album> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(album: Album) {
    this.select.emit(album);
  }

}
