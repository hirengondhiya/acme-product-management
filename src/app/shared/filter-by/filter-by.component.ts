import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent {
  filterValue: string;
  @Output() filterValueChanged = new EventEmitter<string>();
  constructor() { }

  newFilterValue(value) {
    this.filterValueChanged.emit(value);
  }
}
