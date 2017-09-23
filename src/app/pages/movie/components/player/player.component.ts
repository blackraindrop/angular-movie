import { Component, OnInit, Input } from '@angular/core';

import { Episode } from '../../models/episode';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
