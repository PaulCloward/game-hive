import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable   } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchResultsLimit:string = "10";  
  searchGames:string;

  constructor(private _http: Http) { }

  searchBoardGames(name:string){
    
     //var _url: string = "https://www.boardgameatlas.com/api/search?name="+name+"&limit=" + this.searchResultsLimit + "&client_id=GtUFcHyb1L"; 
     var _url: string = "https://www.boardgameatlas.com/api/search?kickstarters=true"+"&limit=" + this.searchResultsLimit + "&client_id=GtUFcHyb1L"; 
     let headers = new Headers();
     headers.append("Accept", "application/json");
    
     return this._http.get(_url,{headers:headers}).pipe(map((response: any) => response.json()));
  }

  searchBoardGamesCriteria(){
    var _url: string = "https://www.boardgameatlas.com/api/search?categories=7rV11PKqME?order_by=popularity&limit=" + this.searchResultsLimit + "&client_id=GtUFcHyb1L"; 
     let headers = new Headers();
     headers.append("Accept", "application/json");
    
     return this._http.get(_url,{headers:headers}).pipe(map((response: any) => response.json()));
  } 
}
