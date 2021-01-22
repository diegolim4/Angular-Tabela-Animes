import { Component, OnInit } from "@angular/core";
import { AnimeService } from "./anime.service";
import { Animes } from "./animes";

@Component({

    selector: 'app-anime-list',
    templateUrl: './anime-list.component.html'

})
export class AnimeListComponent implements OnInit{ 

  filteredAnimes: Animes[] =[]
  
  _animes: Animes[] = [];

  _filterBy: string;  

  constructor(private animeService: AnimeService) { }
  
  ngOnInit(): void{
    this._animes = this.animeService.retrieveAll();
    this.filteredAnimes = this._animes;
  }

  set filter(value: string){
    this._filterBy = value;
    
    this.filteredAnimes = this._animes.filter((anime: Animes) => anime.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) >-1);
  }

  get filter(){
    return this._filterBy;
  }

}

