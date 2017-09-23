import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Catalog } from '@pages/index';
import { SelectionModel, SelectionChange } from '@angular/cdk/collections';
@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit, OnChanges {
  @Input()
  catalogs: Catalog[];

  @Output()
  onSelected: EventEmitter<Catalog> = new EventEmitter();

  selectionModel: SelectionModel<Catalog>;
  activeCatalog: Catalog;
  constructor() {
    this.selectionModel = new SelectionModel(false, []);
  }

  ngOnInit() {
    // 设置第一个
    this.selectionModel.onChange.subscribe((res: SelectionChange<Catalog>) => {
      this.onSelected.emit(this.activeCatalog);
    });
  }

  onClick(item: Catalog) {
    this.activeCatalog = item;
    this.selectionModel.select(item);
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentCatalogs = changes['catalogs'].currentValue;
    if (!this.activeCatalog && currentCatalogs) {
      this.onClick(currentCatalogs[0]);
    }
  }

}
