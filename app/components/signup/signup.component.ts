import {Component} from "@angular/core";
import {Router} from "@angular/router"

@Component({
    selector : "signup",
    templateUrl : "../app/views/signup.html"
})

export class SignupComponent{
    constructor(private router : Router){}
    loginClick(){
        this.router.navigate(['/login'])
    }
    
}