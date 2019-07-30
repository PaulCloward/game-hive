import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { IFeedback } from '../../models/IFeedback';

@Component({
  selector: 'app-feedback-tab',
  templateUrl: './feedback-tab.page.html',
  styleUrls: ['./feedback-tab.page.scss'],
})
export class FeedbackTabPage implements OnInit {

  userID:string;

  mFeedbackObject:IFeedback = {user: "", whyLike:"", biggestComplaint:"", changeOneThing: "", whatMake10TimesBetter: ""};  

  constructor(private mFirebaseService: FirebaseService, private mAuth:AngularFireAuth) { }

  ngOnInit() {
  	this.mAuth.authState.subscribe(user => {
          if(user) {
            this.userID = user.uid;
          }
      });
  }

  submitFeedback(){
  	if(this.userID){
  		this.mFeedbackObject.user = this.userID;
  		this.mFirebaseService.submitFeedback(this.mFeedbackObject);
  		this.mFeedbackObject = {user: "", whyLike:"", biggestComplaint:"", changeOneThing: "", whatMake10TimesBetter: ""};
  	}
  }
}
