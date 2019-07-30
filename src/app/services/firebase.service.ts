import {from as observableFrom,  Observable ,  of } from 'rxjs';

import {map, switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';

import { IGame } from '../models/IGame';
import { IFeedback } from '../models/IFeedback';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public user : Observable<true>;
  
  private email:string;
  isLoggedIn: Observable<boolean>;

  private PATIENTS:string = "patients";
  private YEARS:string = "years";
  private MONTHS:string = "months";
  private DAYS:string = "days";
  private TODAY_VITALS:string = "today-vitals";

  private uidString:String = "";
  private userUID;

  userTest:any;

  gameListReference:string;

  uid = this.mAuth.authState 
     .pipe(
        map(
          authState => {
                if(!authState){
                   return null;
                } else{
                  this.uidString = authState.uid;
                   return authState.uid;
                }}
  ));

  readonly GAME_LIST_KEY:string = "gameList";
  readonly USERS_KEY:string = "users";

  constructor(private mAuth: AngularFireAuth, private mDatabase: AngularFireDatabase) { 
      this.userTest = mAuth.authState;
        this.mAuth.authState.subscribe(user => {
          if(user) {
            this.userUID = user.uid;
             this.gameListReference = this.USERS_KEY + "/" + this.userUID + "/" + this.GAME_LIST_KEY;
          }
      });
  }

  get authenticated():boolean {
    return this.user != null;
  }

  login(email:string, password:string):Observable<any>{
  	return observableFrom(
  		this.mAuth.auth.signInWithEmailAndPassword(email, password)
  	);
  }

  logout(){
    this.mAuth.auth.signOut();
  }

  isAuthenticated(): Observable<boolean>{
    return this.uid.pipe(switchMap(uid => { 
        if(!uid){
          return of(false)
        }
        else{
          return of(true)
        }
      }));
  }

  getUserID():String{
    return "this.uid";
  }

  getUserEmail():String{
    return this.email;
  }
  
  isUserAuthenticated(){
    this.mAuth.auth.onAuthStateChanged((user) => {
       if (user) {
          return true;
       } else {
          return false;
       }
    });
  }

  addNewGame(newGame:IGame){
    const gameKey = this.mDatabase.database.ref(this.gameListReference).push().key;
    newGame.id = gameKey;
    this.mDatabase.database.ref(this.gameListReference).child(gameKey).set(newGame);
  }

  getGameList(userID:string){
    console.log("GET GAME LIST");
    console.log(this.USERS_KEY + "/" + this.userUID + "/" + this.GAME_LIST_KEY);
      return this.mDatabase.list<IGame>(this.USERS_KEY + "/" + this.userUID + "/" + this.GAME_LIST_KEY).valueChanges();
  }

  submitFeedback(feedback:IFeedback){

    //maybe add date to database object
    /*let dateFeedbackSubmit = new Date(); 
    let year = dateFeedbackSubmit.getFullYear();
    let month = dateFeedbackSubmit.getMonth() + 1;
    let day = dateFeedbackSubmit.getDate();*/

    this.mDatabase.database.ref('feedback').push(feedback);
  } 
}
