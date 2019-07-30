import { Component, OnInit, NgZone } from '@angular/core';
import { IGame } from '../../models/IGame';
import { IPlayerScore } from '../../models/IPlayerScore';
import { FirebaseService } from '../../services/firebase.service';
import { SearchService } from '../../services/search.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scores-tab',
  templateUrl: './scores-tab.page.html',
  styleUrls: ['./scores-tab.page.scss'],
})
export class ScoresTabPage implements OnInit {

  readonly PAGE_LANDING:number = 0;
  readonly PAGE_GAME_SELECTED:number = 1;
  readonly PAGE_NEW_GAME:number = 2;
  readonly PAGE_CONTINUE_NEW_GAME:number = 3;
  readonly MAX_PLAYER_AMOUNT = 12;

  pageRouter:number = this.PAGE_LANDING;
  gameName:string = "";
  playerAmount:number = 0;
  gameTypeSinglePlay:boolean = true;
  selectedGame:IGame;
  selectedGamePlayerAmount:any[] = [];

  foundGameNames:string[];

  constructor(private mSearchService: SearchService, private ngZone: NgZone, private mFirebase: FirebaseService, private mAuth: AngularFireAuth, private mRouter: Router) { }

  playersAssociatedGames:IGame[] = [];

  scoresPlayers:IPlayerScore[] = [{'username':"Paul", "iconColor":"#000", "score": 0 },
        {'username': "Ryan", "iconColor":"#000", "score": 12 },
        {'username': "Shadow", "iconColor":"#333", "score": 4 },
        {'username': "Master JongYawn", "iconColor":"#000", "score": 6 },
        {'username': "Twabbles", "iconColor":"#555", "score": 19 },
        {'username': "Big Hero 6", "iconColor":"#000", "score": 12 }];

  ngOnInit() {
    this.searchBoardGames("Catan");
    
     this.mAuth.authState.subscribe(user => {
          if(user) {
            this.getGameList(user.uid);
          }
      });
  }

  searchBoardGames(name:string){
    this.mSearchService.searchBoardGames(name)
          .subscribe(results => this.parseFoundBoardGames(results),
            error => console.log(error));
  }

  parseFoundBoardGames(result):string[]{
    
    //re-init array
    this.foundGameNames = [];

    for(let i = 0; i < result.games.length; i++){
      const gameResult = result.games[i];
      const gameName = gameResult.name;
      console.log(gameName);
      this.foundGameNames.push(gameName);
    }
    return this.foundGameNames;
  }

  getGameList(userId:string){
      this.mFirebase.getGameList(userId).subscribe(
        games => {
          this.playersAssociatedGames = games;
        },
        error => {
          console.log(error);
        }
      );
  }

  onSelectGame(game:IGame){
    this.selectedGame = game;
    this.pageRouter = this.PAGE_GAME_SELECTED;

    this.selectedGamePlayerAmount = Array(this.selectedGame.players).fill(0).map((x,i)=>i);
  }

  addOnePlayer(){
    if(this.playerAmount < this.MAX_PLAYER_AMOUNT){
      this.playerAmount++;
    }
  }

  subtractOnePlayer(){
    if(this.playerAmount > 0){
      this.playerAmount--;
    }
  }

  addGame(){
    const timestamp = this.createGameAddedTimestring();
    let type:string;
    if(this.gameTypeSinglePlay){
      type = "Single";
    } else{
      type = "Ongoing";
    }
    let newGame = {'id': "",'name': this.gameName, 'completed': false, 'timestampCreated':timestamp, 'timestampLastPlayed': timestamp, 'type': type, 'players':7};
    this.mFirebase.addNewGame(newGame);
  }

  createGameAddedTimestring(){
     const currentDate = new Date();
     const day = currentDate.getDate();
     const month = currentDate.getMonth() + 1;
     const year = currentDate.getFullYear();
     return month + "/" + day + "/" + year;
  }

  onClickPlayer(){
    this.mRouter.navigateByUrl('/choose-avatar');
  }


}
