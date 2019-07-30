import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-avatar',
  templateUrl: './choose-avatar.page.html',
  styleUrls: ['./choose-avatar.page.scss'],
})
export class ChooseAvatarPage implements OnInit {

  constructor(private mRouter:Router) { }

  ngOnInit() {
  }

  onClickBack(){
  	this.mRouter.navigateByUrl('/tabs/scores-tab');
  }

}
