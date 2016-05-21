import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"
import { SignupComponent } from '../../components/signup/signup.component';
import { User } from '../../services/user.service';

@Component({
    selector : "login", 
    templateUrl : '../app/views/login.html'
    
}) 
export class LoginComponent implements OnInit{ 
    constructor(public router:Router){
    }
    model : User;
    
    singupClick(){
        this.router.navigate(['/signup']);
    }
    ngOnInit(){
        this.model = new User("Mahipal", "111111", "6535", "mahi6535@gmail.com");
    }
    loginBtn(){
        this.router.navigate(['/dashboard'])
    }
    
}