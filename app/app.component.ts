import {Component, OnInit} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailComponent } from './components/userdetail/userdetail.component';

@Component({
    selector : "my-app",
    template : `
        <router-outlet> </router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, LoginComponent, SignupComponent, DashboardComponent, UserDetailComponent] 
})

@Routes([
    {path : "/login", component : LoginComponent},
    {path : "/signup", component : SignupComponent},
    {path : "/dashboard", component : DashboardComponent},
    {path : "/user/:id", component : UserDetailComponent}
])

export class AppComponent implements OnInit{
    loggedIn = true;
    constructor(private router : Router){
        this.loggedIn = false
    }
    ngOnInit(){
        if(this.loggedIn){
            this.router.navigate(['/login'])
        }else{
            this.router.navigate(['/dashboard'])
        }
        
    }
}