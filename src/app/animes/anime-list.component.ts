import { Component, OnInit } from "@angular/core";
import { Animes } from "./animes";

@Component({

    selector: 'app-anime-list',
    templateUrl: './anime-list.component.html'

})
export class AnimeListComponent implements OnInit{ 

  animes: Animes[] = [];
  
  ngOnInit(): void{
    this.animes = [
      {
        nome: 'Hunter x Hunter',
        imageUrl: '/assets/img/hunter.png',
        arcos: 8,
        duracaoEp: 24,
        avaliar: 9.6,
        anoEstreia: 1998,
        opcoes:'',
      },
      {
        nome: 'One Piece ',
        imageUrl: '/assets/img/onepiece.png',
        arcos: 25,
        duracaoEp: 24,
        avaliar: 8.6,
        anoEstreia: 1999,
        opcoes:'',
      },
      {
        nome: 'Boku No hero ',
        imageUrl: '/assets/img/bokunohero.png',
        arcos: 4,
        duracaoEp: 24,
        avaliar: 7.9,
        anoEstreia: 2019,
        opcoes:'',
      },
      {
        nome: 'Attack on Titan ',
        imageUrl: '/assets/img/attack.png',
        arcos: 5,
        duracaoEp: 24,
        avaliar: 9.5,
        anoEstreia: 2013,
        opcoes:'',
      },
      {
        nome: 'Death Note ',
        imageUrl: '/assets/img/deathnote.png',
        arcos: 2,
        duracaoEp: 24,
        avaliar: 9.9,
        anoEstreia: 2006,
        opcoes:'',
      },
      {
        nome: 'Naruto ',
        imageUrl: '/assets/img/naruto.png',
        arcos: 2,
        duracaoEp: 27,
        avaliar: 8.3,
        anoEstreia: 2002,
        opcoes:'',
      }

      
    ]
  }


}

