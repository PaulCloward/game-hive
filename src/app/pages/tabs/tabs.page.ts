import { Component, OnInit, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  isLoggedIn:boolean;
  email:string;

  TAB_SCORES:number = 0;
  TAB_TOOLS:number = 1;
  TAB_DISCOVER:number = 2;
  TAB_PROFILE:number = 3;
  TAB_SEARCH:number = 4;
  TAB_HIVE:number = 5;

  selectedTab:number = this.TAB_HIVE;

  constructor(private ngZone: NgZone, private mAuth: AngularFireAuth, private mRouter: Router) { }

  ngOnInit() {

    this.mAuth.authState.subscribe(user => {
      if(user) {
        console.log(user.email);
        this.isLoggedIn = true;
        this.email = user.email;
       // this.mRouter.navigateByUrl('/vitals');
      } else{
        this.isLoggedIn = false;
        this.mRouter.navigateByUrl('/login');
      }
      });
  }
}