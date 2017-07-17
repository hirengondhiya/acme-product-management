import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() starRating: number;
  @Output() ratingClicked = new EventEmitter<string>();
  starWidth: number;
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.starWidth = this.starRating * 86 / 5;
  }

  onRatingClick() {
    console.log(this.starWidth);
    this.ratingClicked.emit(`The rating ${this.starRating} was clicked.`);
  }
}
