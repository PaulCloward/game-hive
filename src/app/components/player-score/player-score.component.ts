import { Component, OnInit, Input } from '@angular/core';
import { IPlayerScore } from '../../models/IPlayerScore';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {

  @Input() playerScore:IPlayerScore;
  @Input() playerNumber:number;

  iconSelected:boolean = false;

  constructor(private mRouter: Router) { }

  ngOnInit() {
    console.log(this.playerNumber);
    if(this.playerNumber % 2 === 0){
      this.iconSelected = true;
    }else {
      this.iconSelected = false;
    }
  }
  
  onClickPlayerIcon(){
    /*this.mRouter.navigateByUrl('../../pages/choose-avatar');*/
  }
}
