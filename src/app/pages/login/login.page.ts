import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  errorMessage:string;

  constructor(private mFirebaseService: FirebaseService, private mRouter:Router, private _auth: AuthService) { }

  ngOnInit() {

    this.mFirebaseService.isAuthenticated()
      .subscribe(
          success => this.navigateLoggedIn(success) 
      );
  }

  clickSignUpPage(){
  	this.mRouter.navigateByUrl('/register');
  }

  login(email:string, password:string){

    this.mFirebaseService.login(email,password)
      .subscribe(
      success => this.mRouter.navigateByUrl('/tabs'),
      error => console.log(error.message)
      );  
  }

  navigateLoggedIn(isLoggedIn:boolean){
    if(isLoggedIn){
     this.mRouter.navigateByUrl('/tabs');
    }
  }

}
