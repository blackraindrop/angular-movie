import { Component, OnInit, Input } from '@angular/core';

import { Catalog } from '../../models/catalog';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  @Input()
  catalogs: Catalog[];

  constructor() { }

  ngOnInit() {
  }

}
