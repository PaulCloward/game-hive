import { Component, OnInit, NgZone } from '@angular/core';
import { IGame } from '../../models/IGame';
import { IFoundGame } from '../../models/IFoundGame';
import { IPlayerScore } from '../../models/IPlayerScore';
import { FirebaseService } from '../../services/firebase.service';
import { SearchService } from '../../services/search.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SearchCriteriaPage } from '../search-criteria/search-criteria.page';
import { PopupSearchCriteriaComponent } from '../../components/popup-search-criteria/popup-search-criteria.component';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.page.html',
  styleUrls: ['./search-tab.page.scss'],
})
export class SearchTabPage implements OnInit {

  readonly screenViewDefault:number = 1;
  readonly screenViewTwo:number = 2;
  readonly currentScreenView:number = this.screenViewDefault;

  foundGames:IFoundGame[];
  foundGameNames:string[];
  searchBarGame:string;

  readonly selectorFeatured:number = 0;
  readonly selectorTrending:number = 1;
  readonly currentSelector: number = this.selectorFeatured;

  cart = [];
  items = [];

  criteriaSelected:string = "";
 
  sliderConfigLarge = {
    slidesPerView: 1.6,
    spaceBetween: 0,
    centeredSlides: false
  };

  sliderConfigSmall = {
    slidesPerView: 1.9,
    centeredSlides: false
  } 

  constructor( private popoverController: PopoverController, private mSearchService: SearchService, private mNGZone: NgZone, private mRouter: Router) { }

  ngOnInit() {
    
  }

   async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SearchCriteriaPage,
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.criteriaSelected = dataReturned.data;
      }
    });

    return await popover.present();
  }

  searchBoardGames(){
  	
    this.searchBarGame = "test-criteria";
  	if(this.searchBarGame == null && this.searchBarGame == ""){
  		return;
  	}

    this.mSearchService.searchBoardGames(this.searchBarGame)
          .subscribe(results => this.parseFoundBoardGames(results),
            error => console.log(error));
  }

  searchBoardGameCriteria(){
    

    this.mSearchService.searchBoardGamesCriteria()
          .subscribe(results => this.parseFoundBoardGames(results),
            error => console.log(error));
  }

  parseFoundBoardGames(result){
    
    //re-init array
    this.foundGameNames = [];
    this.foundGames = [];

    this.mNGZone.run(() => {
      for(let i = 0; i < result.games.length; i++){
        const gameResult = result.games[i];
        const gameName = gameResult.name;
        const foundGame = {id:gameResult.id, name:gameResult.name, imgPath: gameResult.images.medium};
        this.foundGames.push(foundGame);
        this.foundGameNames.push(gameName);
      }
      return this.foundGameNames;
    },
    error => {return null});
  }

  onClickGame(game){
    console.log(game);
  }

  onClickSearch(){
    this.mRouter.navigateByUrl('search-criteria');
  }

}
