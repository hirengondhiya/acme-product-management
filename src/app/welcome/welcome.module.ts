import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule, welcomeRoutingComponents } from './welcome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [ welcomeRoutingComponents ]
})
export class WelcomeModule { }
