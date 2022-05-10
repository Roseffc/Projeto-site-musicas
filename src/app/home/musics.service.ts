import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  musicas = [
    {
     id:1,
     artista:'Pitty',
     musica: 'Motor',
     genero: 'Rock',
     urlimagem: 'assets/img/pittymotor.jpg'
    },
    {
      id:2,
      artista:'Nando Reis',
      musica: 'All Star',
      genero: 'Rock',
      urlimagem: 'assets/img/nando.jpg'
     },
     {
      id:3,
      artista:'Cássia Eller',
      musica: 'Malandragem',
      genero: 'Rock',
      urlimagem: 'assets/img/cassia.jpg'
     },
     {
      id:4,
      artista:'Legião Urbana',
      musica: 'Há tempos',
      genero: 'Rock',
      urlimagem: 'assets/img/legiao.jpg'
     },
     {
      id:5,
      artista:'Charlie Brown Jr',
      musica: 'Só os loucos sabem',
      genero: 'Rock',
      urlimagem: 'assets/img/charlie.jpg'
     },
     {
      id:6,
      artista:'Natiruts',
      musica: 'Reggae Power',
      genero: 'Rock',
      urlimagem: 'assets/img/natiruts.jpg'
     },
     {
      id:7,
      artista:'Capital Inicial',
      musica: 'Fogo',
      genero: 'Rock',
      urlimagem: 'assets/img/capital.jpg'
     },
     {
      id:8,
      artista:'Engenheiros do Hawaii',
      musica: 'Terra de Gigantes',
      genero: 'Rock',
      urlimagem: 'assets/img/engenheiros.jpg'
     },

  ]

  constructor() { }

  getListMusics() {
    return this.musicas
  }
  saveMusic(music:any) {
    console.log(music);
  }
  saveArtista(artista:any) {
    console.log(artista);
  }



}
