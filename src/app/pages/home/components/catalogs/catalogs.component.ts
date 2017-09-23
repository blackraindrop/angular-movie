import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Catalog } from '../../models/catalog';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  @Input()
  catalogs: Catalog[];

  @Output()
  select: EventEmitter<Catalog> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick(catalog: Catalog) {
    this.select.emit(catalog);
  }

}
