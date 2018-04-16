import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule.forRoot()
    
    
  ],
  declarations: [
    HomeComponent,
    SidebarComponent
    
  ]
})
export class HomeModule { }
