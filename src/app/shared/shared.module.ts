import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';
import { FilterByComponent } from './filter-by/filter-by.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ StarComponent, FilterByComponent ],
  exports: [ StarComponent, FilterByComponent, FormsModule ]
})
export class SharedModule { }
