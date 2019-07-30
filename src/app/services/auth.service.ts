import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase/app";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user : Observable<firebase.User>;

  constructor(private _auth: AngularFireAuth) {
  	this.user = _auth.authState;
  }

  createAccount(email, password){
	  return new Promise<any>((resolve, reject) => {
	     this._auth.auth.createUserWithEmailAndPassword(email, password)
        .then(res => {
	      resolve(res);
	    }, err => reject(err))
	  });
	}

	signIn(email, password){
		return new Promise<any>((resolve, reject) => {
			this._auth.auth.signInWithEmailAndPassword(email, password)
				.then(res => {
					resolve(res);
				}, err => reject(err))
		});
	}

	signOut(){
		this._auth.auth.signOut();
	}

	isAuthenticated(){
		return this.user.pipe(map(user => user && user.uid !== undefined));
	}

	getCurrentUser(){
		return this._auth.auth.currentUser;
	}

	//Havent tested if it works
	get authenticated(): boolean {
	  return this._auth.authState !== null;
	}

	doLogin(value){
	   return new Promise<any>((resolve, reject) => {
	     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
	     .then(res => {
	       resolve(res);
	     }, err => reject(err))
	   })
	 }
}
