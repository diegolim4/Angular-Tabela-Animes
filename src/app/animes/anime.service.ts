import { Injectable } from '@angular/core';
import {Animes} from './animes';

@Injectable({  // Aqui aplicamos a injeção de dependência 
    providedIn: 'root'
})

export class AnimeService{
    retrieveAll(): Animes[] {
        return ANIMES ; 
    }
}
var ANIMES: Animes[] = [
           
    {
        nome: 'Hunter x Hunter',
        imageUrl: '/assets/img/hunter.png',
        nEps: 48,
        arcos: 6,
        duracaoEp: 24,
        avaliar: 9.6,
        anoEstreia: 1998,
        opcoes:'',
    },
    {
        nome: 'One Piece ',
        imageUrl: '/assets/img/onepiece.png',
        nEps: 931,
        arcos: 20,
        duracaoEp: 24,
        avaliar: 8.6,
        anoEstreia: 1999,
        opcoes:'',
      },
      {
        nome: 'Boku No hero ',
        imageUrl: '/assets/img/bokunohero.png',
        nEps:88,
        arcos: 4,
        duracaoEp: 24,
        avaliar: 7.9,        
        anoEstreia: 2019,        
        opcoes:'',
      },
      {
        nome: 'Attack on Titan ',
        imageUrl: '/assets/img/attack.png',
        nEps: 75,
        arcos: 5,
        duracaoEp: 24,
        avaliar: 9.5,
        anoEstreia: 2013,
        opcoes:''
      },
      {
        nome: 'Death Note ',
        imageUrl: '/assets/img/deathnote.png',
        nEps:37,
        arcos: 1,
        duracaoEp: 24,
        avaliar: 9.9,
        anoEstreia: 2006,
        opcoes:'',
      },
      {
        nome: 'Naruto ',
        imageUrl: '/assets/img/naruto.png',
        nEps: 500,
        arcos: 21,
        duracaoEp: 20,
        avaliar: 8.3,
        anoEstreia: 2002,
        opcoes:'',
      }        
      
            
          
        
]