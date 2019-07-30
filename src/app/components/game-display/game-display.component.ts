import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../../models/IGame';
import * as $ from 'jquery';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss'],
})
export class GameDisplayComponent implements OnInit {

  constructor() { }

  @Input() game:IGame;

  ngOnInit() {
  	
  }


  clickCompleteGame(){
     this.game.completed = !this.game.completed;
  }
}
