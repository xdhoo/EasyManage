import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';

const routes:Routes =[
    { path: '' ,redirectTo:'/login', pathMatch:'full'},
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path: '', component: LoginComponent}
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}