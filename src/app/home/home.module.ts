import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { CatelogsComponent } from './components/catelogs/catelogs.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    CatelogsComponent
  ]
})
export class HomeModule { }
