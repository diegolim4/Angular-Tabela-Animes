import { Component, OnInit } from "@angular/core";
import { AnimeService } from "./anime.service";
import { Animes } from "./animes";

@Component({

    selector: 'app-anime-list',
    templateUrl: './anime-list.component.html'

})
export class AnimeListComponent implements OnInit{ 

  animes: Animes[] = [];

  constructor(private animeService: AnimeService) {}
  
  ngOnInit(): void{
    this.animes = this.animeService.retrieveAll();
  }


}

