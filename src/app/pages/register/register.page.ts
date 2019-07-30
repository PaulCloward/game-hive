import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string;
  email:string;
  password:string;
  confirmPassword:string;

  errorMessage: string;
  successMessage: string;

  constructor(private mRouter:Router, private _auth: AuthService) { }

  ngOnInit() {
  }

  public onClickRegister(){

    /*let validFields:boolean = this.validateInputFields();
    if(validFields == false){
      return;
    }*/

    this._auth.createAccount(this.email, this.password)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Your patient account has been created";
      this.mRouter.navigateByUrl("/tabs");
    }, err => {
      this.errorMessage = err.message;
      this.successMessage = "";
    });
  }

  clickSignInPage(){
  	this.mRouter.navigateByUrl('/login');
  }

}
