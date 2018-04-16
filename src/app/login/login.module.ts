import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot()
    
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
