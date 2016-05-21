import {Component, OnInit} from "@angular/core"
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router"

import { User } from '../../services/user.service';
import { UserDetailComponent } from '../../components/userdetail/userdetail.component';

@Component({
    selector : "dashboard",
    directives: [UserDetailComponent],
    templateUrl : "../../app/views/dashboard.html",
})

export class DashboardComponent{
    constructor(public router:Router){ 
    }
    userDetailsVisible : boolean = true;
    backtoDashboardVisible : boolean = true;
    updated : boolean = true;
    
    newuser :User = new User("", "", "", "") ;
    newuserLabel : string = "Add User"; 
    selectedUser :User;
    addUserVisible : boolean = false;
    addUserLinkVisible :boolean = false;
    
    users = [
        new User("Mahipal", "mahi6535@gmail.com", "29", "Hyderabad"),
        new User("Lucky", "lucky@gmail.com", "4", "Armoor"),
        new User("Akki", "test@gmail.com", "0", "Armoor") 
    ]
    removeUser(index:number){
        this.users.splice(index, 1);
    }
    reset(){
        this.newuser = new User("", "", "", "");
        this.newuserLabel = "Add User"; 
        this.addUserVisible = !this.addUserVisible;
        this.addUserLinkVisible = !this.addUserLinkVisible;
        this.IsUpdated = false;
    }
    addUserLinkClick(){
        this.addUserVisible = true;
        this.addUserLinkVisible = !this.addUserLinkVisible;
        this.IsUpdated = false;
    }
    IsUpdated : boolean = false;
    updateUser(userId:number, user:User){
        this.IsUpdated = true;
        this.addUserVisible = true;
        this.addUserLinkVisible = true;
        this.users.forEach((element, index) => {
            if(index == userId){
                this.newuser = user;
            }
        }); 
    } 
    UpdateBtnClick(user:User){
        this.users.forEach((element, index) => {
            console.log(element == user);
            if(element == user){
                console.log(this.newuser);
                this.users.splice(index, 1, this.newuser);
            }
        });
    }
    AddUser(){
        this.users.push(this.newuser);
        this.IsUpdated = false;
    }
    detailsClick(user:User){
        console.log(user);
        this.userDetailsVisible = false;
        this.backtoDashboardVisible = false;
        this.selectedUser = user
    }
    BackBtnClick(){
        this.router.navigate(['/dashboard'])
        this.userDetailsVisible = true;
        this.backtoDashboardVisible = true;
        this.selectedUser = null;
    }

}