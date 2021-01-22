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
        descricao:'',
        arcos: 8,
        duracaoEp: 24,
        avaliar: 9.6,
        anoEstreia: 1998,
        opcoes:'',
    },
    {
        nome: 'One Piece ',
        imageUrl: '/assets/img/onepiece.png',
        descricao:'',
        arcos: 25,
        duracaoEp: 24,
        avaliar: 8.6,
        anoEstreia: 1999,
        opcoes:'',
      },
      {
        nome: 'Boku No hero ',
        imageUrl: '/assets/img/bokunohero.png',
        descricao:'',
        arcos: 4,
        duracaoEp: 24,
        avaliar: 7.9,        
        anoEstreia: 2019,        
        opcoes:'',
      },
      {
        nome: 'Attack on Titan ',
        imageUrl: '/assets/img/attack.png',
        descricao:'',
        arcos: 5,
        duracaoEp: 24,
        avaliar: 9.5,
        anoEstreia: 2013,
        opcoes:'',
      },
      {
        nome: 'Death Note ',
        imageUrl: '/assets/img/deathnote.png',
        descricao:'',
        arcos: 2,
        duracaoEp: 24,
        avaliar: 9.9,
        anoEstreia: 2006,
        opcoes:'',
      },
      {
        nome: 'Naruto ',
        imageUrl: '/assets/img/naruto.png',
        descricao:'',
        arcos: 2,
        duracaoEp: 27,
        avaliar: 8.3,
        anoEstreia: 2002,
        opcoes:'',
      }        
      
            
          
        
]